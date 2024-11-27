import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlunosService } from './../../alunos.service';
import { ToastService } from '../../../../../../shared/toast/toast.service';
import { InputIconComponent } from '../../../../../../shared/input-icon/input-icon.component';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { SelectComponent } from '../../../../../../shared/select/select.component';
import { ModalService } from '../../../../../../shared/modal/modal.service';
import { AbrirCameraComponent } from './components/abrir-camera/abrir-camera.component';
import { alunoRequest } from '../../../../../../models/alunos.interface';

@Component({
  selector: 'cadastrar-aluno',
  standalone: true,
  templateUrl: './cadastrar-aluno.component.html',
  styleUrls: ['./cadastrar-aluno.component.scss'],
  imports: [
    InputIconComponent,
    ButtonComponent,
    NgIf,
    NgOptimizedImage,
    SelectComponent,
  ],
})
export class CadastrarAlunoComponent {



  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    dataNascimento: new FormControl('', Validators.required),
    genero: new FormControl('', Validators.required),
    alergias: new FormControl('', Validators.required),
    medicacao: new FormControl('', Validators.required),
    condicaoMedica: new FormControl('', Validators.required),
    nomeResponsavel: new FormControl('', Validators.required),
    emailResponsavel: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    endereco: new FormControl('', [Validators.required]),
    cep: new FormControl('', [Validators.required]),
    cidade: new FormControl('', [Validators.required]),
    uf: new FormControl('', [Validators.required]),
    bairro: new FormControl('', Validators.required),
    numeroEndereco: new FormControl('', Validators.required),
    complemento: new FormControl('', Validators.required),
    // foto_aluno: new FormControl(null)
  });

  camposObrigadores: boolean = false;
  stepsAdicionarResponsavel: number = 1;
  adicionarPrimeiroResponsavel: boolean = false;
  adicionarSegundoResponsavel: boolean = false;
  adicionarTerceiroResponsavel: boolean = false;

  constructor(
    private readonly alunosService: AlunosService,
    private readonly toast: ToastService,
    private readonly modalService: ModalService
  ) {}

  salvar() {
    if (this.form.valid) {
      console.log(this.form.value)
      this.alunosService.cadastrarAluno(this.form.value as alunoRequest).subscribe({
        next: value => {
          this.alunosService.steps.next({component: 'listar-alunos', idAluno: ''});
          this.toast.notify({
            message: 'Aluno Cadastrado com Sucesso',
            type: 'SUCCESS',
          });
        },
        error: err => {
          this.toast.notify({
            message: 'Erro ao cadastrar aluno. Tente novamente mais tarde !',
            type: 'ERROR',
          });
        },
      })
    } else {
      console.log(this.form.value)
      // this.camposObrigadores = true
      this.toast.notify({
        message: 'Preencha todos os campos obrigatórios e capture uma foto.',
        type: 'WARNING',
      });
    }
    // if (this.form.valid && this.fotoCapturada) {
    //   const formData = new FormData();
    //   formData.append('nome', this.form.get('nome')?.value || '');
    //   formData.append('responsavel', this.form.get('responsavel')?.value || '');
    //   formData.append('email', this.form.get('email')?.value || '');
    //   formData.append('bairro', this.form.get('bairro')?.value || '');
    //   formData.append('foto', this.fotoCapturada);

    //   this.alunosService.cadastrarAluno(formData).subscribe(
    //     () => {
    //       this.toast.notify({ message: 'Aluno cadastrado com sucesso.', type: "SUCCESS" });
    //       this.form.reset();
    //       this.fotoCapturada = null;
    //       this.fotoCapturadaUrl = null;
    //       this.alunosService.steps.next('listar-alunos');
    //     },
    //     (error) => {
    //       console.error('Erro ao cadastrar aluno:', error);
    //       this.toast.notify({ message: 'Erro ao cadastrar aluno.', type: "ERROR" });
    //     }
    //   );
    // } else {
    //   this.toast.notify({ message: 'Preencha todos os campos obrigatórios e capture uma foto.', type: "WARNING" });
    // }
  }

  adicionarResponsavel() {
    if(this.adicionarSegundoResponsavel === false && this.adicionarTerceiroResponsavel === false) {
      this.stepsAdicionarResponsavel = 1;
    }
    if(this.stepsAdicionarResponsavel <= 2) {
      this.stepsAdicionarResponsavel++;
    }
    if(this.stepsAdicionarResponsavel === 2) {
      this.adicionarSegundoResponsavel = true;
    }
    if(this.stepsAdicionarResponsavel === 3) {
      this.adicionarTerceiroResponsavel = true;
    }
  }

  retirarResponsavel(value: string) {

    if(value === 'dois') {
      this.adicionarSegundoResponsavel = false;
      this.stepsAdicionarResponsavel--;
    }
    if(value === 'tres') {
      this.adicionarTerceiroResponsavel = false;
      this.stepsAdicionarResponsavel--;
    }
  }

  back() {
    this.alunosService.steps.next({component: 'listar-alunos', idAluno: ''});
  }

  abrirModalCamera() {
    this.modalService.open(AbrirCameraComponent);
  }
}
