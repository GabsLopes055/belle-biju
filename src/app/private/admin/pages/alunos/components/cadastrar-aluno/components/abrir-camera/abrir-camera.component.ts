import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ModalComponent } from '../../../../../../../../shared/modal/modal.component';
import { FormControl, FormGroup } from '@angular/forms';
import { ButtonComponent } from '../../../../../../../../shared/button/button.component';
import { ModalService } from '../../../../../../../../shared/modal/modal.service';

@Component({
  selector: 'app-abrir-camera',
  standalone: true,
  imports: [ModalComponent, ButtonComponent],
  templateUrl: './abrir-camera.component.html',
  styleUrl: './abrir-camera.component.scss',
})
export class AbrirCameraComponent implements OnInit {
  fotoCapturadaUrl: string | null = null;
  @ViewChild('video', { static: false })
  videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas', { static: false })
  canvasElement!: ElementRef<HTMLCanvasElement>;
  fotoCapturada: Blob | null = null;

  stream: MediaStream | null = null;
  cameraAtiva = false;

  form = new FormGroup({
    foto_aluno: new FormControl(null),
  });

  constructor(private readonly modalService: ModalService) {}

  ngOnInit(): void {
    this.alternarCamera();
  }

  voltar() {
    this.modalService.close();
  }

  alternarCamera() {
    if (this.cameraAtiva) {
      this.pararCamera();
    } else {
      this.iniciarCamera();
    }
  }

  iniciarCamera() {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        this.stream = stream;
        this.videoElement.nativeElement.srcObject = stream;
        this.videoElement.nativeElement.play();
        this.cameraAtiva = true;
      })
      .catch((error) => {
        console.error('Erro ao acessar a câmera:', error);
      });
  }

  capturarFoto() {
    if (
      !this.videoElement?.nativeElement ||
      !this.canvasElement?.nativeElement
    ) {
      console.error('Elementos de vídeo ou canvas não estão disponíveis.');
      return;
    }

    const video = this.videoElement.nativeElement;
    const canvas = this.canvasElement.nativeElement;
    const context = canvas.getContext('2d');

    if (context) {
      // Desenhar o frame atual do vídeo no canvas
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Pausar o vídeo após capturar o frame
      video.pause();

      // Converter o canvas para um blob e definir a URL da imagem capturada
      canvas.toBlob(
        (blob) => {
          this.fotoCapturada = blob;
          this.fotoCapturadaUrl = URL.createObjectURL(blob as any);
          this.form.patchValue({ foto_aluno: this.fotoCapturada } as any);
        },
        'image/jpeg',
        0.95
      );
    }
  }

  tirarOutraFoto() {
    this.fotoCapturada = null;
    this.fotoCapturadaUrl = null;
    this.videoElement.nativeElement.play(); // Retomar o vídeo para tirar outra foto
  }

  pararCamera() {
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      this.stream = null;
      this.cameraAtiva = false;
    }
  }
}
