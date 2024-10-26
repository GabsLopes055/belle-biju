import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgIf} from "@angular/common";
import { io } from 'socket.io-client';

@Component({
  selector: 'cameras',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './cameras.component.html',
  styleUrl: './cameras.component.scss'
})
export class CamerasComponent implements OnInit{
  @ViewChild('videoElement', { static: true }) videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('alunoNome', { static: true }) alunoNomeElement!: ElementRef;
  isSendingFrames: boolean = false;
  frameInterval: any;
  socket: any;
  serverUrl: string = 'https://escola-ai-backend.technolimit.com.br';

  constructor() {
    this.socket = io(this.serverUrl);
  }

  ngOnInit(): void {
    this.startCamera();

    // Listen to Socket.IO events
    this.socket.on('alunoPresente', (data: any) => {
      if (data.message === 'Rosto identificado' && data.aluno) {
        this.showAlunoPresente(data.aluno.nome);
      }
    });
  }

  // Start the camera
  async startCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      this.videoElement.nativeElement.srcObject = stream;
    } catch (error) {
      console.error('Erro ao acessar a câmera:', error);
    }
  }

  // Show the recognized student
  showAlunoPresente(nome: string) {
    this.alunoNomeElement.nativeElement.textContent = nome;
    this.alunoNomeElement.nativeElement.style.display = 'block';
  }

  // Toggle frame capture on/off
  toggleFrameCapture() {
    if (this.isSendingFrames) {
      this.stopFrameCapture();
    } else {
      this.startFrameCapture();
    }
  }

  // Start sending frames
  startFrameCapture() {
    this.isSendingFrames = true;
    this.frameInterval = setInterval(() => this.captureFrame(), 1000); // Capture frame every second
  }

  // Stop sending frames
  stopFrameCapture() {
    this.isSendingFrames = false;
    clearInterval(this.frameInterval);
  }

  // Capture a frame and send it to the server
  captureFrame() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d')!;
    canvas.width = this.videoElement.nativeElement.videoWidth;
    canvas.height = this.videoElement.nativeElement.videoHeight;

    context.drawImage(this.videoElement.nativeElement, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
      if (blob) {
        this.sendFrameToServer(blob);
      }
    }, 'image/jpeg', 0.95);
  }

  // Send frame to server
  sendFrameToServer(frameData: Blob) {
    const formData = new FormData();
    formData.append('frame', frameData);

    fetch(`${this.serverUrl}/upload-frame`, {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => console.log('Server response:', data))
      .catch(err => console.error('Error sending frame:', err));
  }

}
