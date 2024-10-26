import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlunosService } from './../../alunos.service';
import { ToastService } from '../../../../../../shared/toast/toast.service';
import {InputIconComponent} from "../../../../../../shared/input-icon/input-icon.component";
import {ButtonComponent} from "../../../../../../shared/button/button.component";
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'cadastrar-aluno',
  standalone: true,
  templateUrl: './cadastrar-aluno.component.html',
  styleUrls: ['./cadastrar-aluno.component.scss'],
  imports: [
    InputIconComponent,
    ButtonComponent,
    NgIf,
    NgOptimizedImage
  ]
})
export class CadastrarAlunoComponent {
  @ViewChild('video', { static: false }) videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas', { static: false }) canvasElement!: ElementRef<HTMLCanvasElement>;
  fotoCapturada: Blob | null = null;
  fotoCapturadaUrl: string | null = null;
  stream: MediaStream | null = null;
  cameraAtiva = false;

  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    responsavel: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    turma: new FormControl('', Validators.required),
    foto_aluno: new FormControl(null)
  });

  constructor(
    private readonly alunosService: AlunosService,
    private readonly toast: ToastService
  ) {}

  alternarCamera() {
    if (this.cameraAtiva) {
      this.pararCamera();
    } else {
      this.iniciarCamera();
    }
  }

  iniciarCamera() {
    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
      this.stream = stream;
      this.videoElement.nativeElement.srcObject = stream;
      this.videoElement.nativeElement.play();
      this.cameraAtiva = true;
    }).catch(error => {
      console.error("Erro ao acessar a câmera:", error);
    });
  }

  capturarFoto() {
    if (!this.videoElement?.nativeElement || !this.canvasElement?.nativeElement) {
      console.error("Elementos de vídeo ou canvas não estão disponíveis.");
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
      canvas.toBlob((blob) => {
        this.fotoCapturada = blob;
        this.fotoCapturadaUrl = URL.createObjectURL(blob as any);
        this.form.patchValue({ foto_aluno: this.fotoCapturada } as any);
      }, 'image/jpeg', 0.95);
    }
  }

  tirarOutraFoto() {
    this.fotoCapturada = null;
    this.fotoCapturadaUrl = null;
    this.videoElement.nativeElement.play(); // Retomar o vídeo para tirar outra foto
  }

  pararCamera() {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
      this.cameraAtiva = false;
    }
  }

  salvar() {
    if (this.form.valid && this.fotoCapturada) {
      const formData = new FormData();
      formData.append('nome', this.form.get('nome')?.value || '');
      formData.append('responsavel', this.form.get('responsavel')?.value || '');
      formData.append('email', this.form.get('email')?.value || '');
      formData.append('turma', this.form.get('turma')?.value || '');
      formData.append('foto', this.fotoCapturada);

      this.alunosService.cadastrarAluno(formData).subscribe(
        () => {
          this.toast.notify({ message: 'Aluno cadastrado com sucesso.', type: "SUCCESS" });
          this.form.reset();
          this.fotoCapturada = null;
          this.fotoCapturadaUrl = null;
          this.alunosService.steps.next('listar-alunos');
        },
        (error) => {
          console.error('Erro ao cadastrar aluno:', error);
          this.toast.notify({ message: 'Erro ao cadastrar aluno.', type: "ERROR" });
        }
      );
    } else {
      this.toast.notify({ message: 'Preencha todos os campos obrigatórios e capture uma foto.', type: "WARNING" });
    }
  }
}
