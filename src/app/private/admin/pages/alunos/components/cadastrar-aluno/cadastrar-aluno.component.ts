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
import { ChipsComponent } from '../../../../../../shared/chips/chips.component';
import { CheckboxComponent } from '../../../../../../shared/checkbox/checkbox.component';
import {
  StepperComponent,
  steps,
} from '../../../../../../shared/stepper/stepper.component';
import { Router } from '@angular/router';
import { LoaderComponent } from "../../../../../../shared/loader/loader.component";

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
    ChipsComponent,
    CheckboxComponent,
    StepperComponent,
    LoaderComponent
],
})
export class CadastrarAlunoComponent {
  //=============================
  //Todo esse component tem que melhorar, ta muito feio.
  //=============================

  steps: steps[] = [
    {
      label: 'Dados Pessoais',
      value: 'dados-pessoais',
      active: true,
    },
    {
      label: 'Responsáveis',
      value: 'responsaveis',
      active: false,
    },
    {
      label: 'Ficha Médica',
      value: 'ficha-medica',
      active: false,
    },
    {
      label: 'Endereço',
      value: 'endereco',
      active: false,
    },
    {
      label: 'Fotos do Aluno',
      value: 'selfie-aluno',
      active: false,
    },
  ];

  @ViewChild('canvas', { static: false })
  canvasElement!: ElementRef<HTMLCanvasElement>;

  fotoCapturada: any;
  fotoCapturadaUrl: string | null = null;
  foto: boolean = false;

  loader: boolean = false;

  form = new FormGroup({
    nomeCompleto: new FormControl('', Validators.required),
    nomeResponsavel: new FormControl('', Validators.required),
    emailResponsavel: new FormControl('', Validators.required),
    turma: new FormControl('Nome Turma', Validators.required),
    // foto_aluno: new FormControl<File | null>(null, Validators.required),
  });
  // cpf: new FormControl('', Validators.required),
  // dataNascimento: new FormControl('', Validators.required),
  // genero: new FormControl('', Validators.required),
  // alergias: new FormControl('', Validators.required),
  // medicacao: new FormControl('', Validators.required),
  // condicaoMedica: new FormControl('', Validators.required),
  // endereco: new FormControl('', [Validators.required]),
  // cep: new FormControl('', [Validators.required]),
  // cidade: new FormControl('', [Validators.required]),
  // uf: new FormControl('', [Validators.required]),
  // bairro: new FormControl('', Validators.required),
  // numeroEndereco: new FormControl('', Validators.required),
  // complemento: new FormControl('', Validators.required),

  stepRegisterUser: 'dados-pessoais' | 'responsaveis' | 'ficha-medica' | 'endereco'  | 'selfie-aluno' =
    'dados-pessoais';

  camposObrigadores: boolean = false;
  stepsAdicionarResponsavel: number = 1;
  adicionarPrimeiroResponsavel: boolean = false;
  adicionarSegundoResponsavel: boolean = false;
  adicionarTerceiroResponsavel: boolean = false;

  chipSelectedDadosPessoais: boolean = true;
  chipSelectedSelfieAluno: boolean = false;
  chipSelectedFichaMedica: boolean = false;

  constructor(
    private readonly alunosService: AlunosService,
    private readonly toast: ToastService,
    private readonly modalService: ModalService,
    private readonly router: Router
  ) {
    this.alunosService.fotoAluno.subscribe((value) => {
      this.foto = true;
      this.fotoCapturada = value;
      this.fotoCapturadaUrl = URL.createObjectURL(value);
    });
  }

  clearPhoto() {
    this.fotoCapturadaUrl = null;
    this.alunosService.fotoAluno.next('');
  }

  salvar() {
    // if(this.se)

    // this.stepRegisterUser = 'selfie-aluno';
    // this.chipSelectedSelfieAluno = true;

    // if (this.form.valid) {
    //   console.log(this.form.value);
    //   this.alunosService
    //     .cadastrarAluno(this.form.value as alunoRequest)
    //     .subscribe({
    //       next: (value) => {
    //         this.alunosService.steps.next({
    //           component: 'listar-alunos',
    //           idAluno: '',
    //         });
    //         this.toast.notify({
    //           message: 'Aluno Cadastrado com Sucesso',
    //           type: 'SUCCESS',
    //         });
    //       },
    //       error: (err) => {
    //         this.toast.notify({
    //           message: 'Erro ao cadastrar aluno. Tente novamente mais tarde !',
    //           type: 'ERROR',
    //         });
    //       },
    //     });
    // } else {
    //   // console.log(this.form.value);
    //   // this.camposObrigadores = true
    //   this.toast.notify({
    //     message: 'Preencha todos os campos obrigatórios e capture uma foto.',
    //     type: 'WARNING',
    //   });
    // }
    if (this.fotoCapturada) {
      const formData = new FormData();
      formData.append('nome', this.form.get('nomeCompleto')?.value || '');
      formData.append(
        'responsavel',
        this.form.get('nomeResponsavel')?.value || ''
      );
      formData.append('email', this.form.get('emailResponsavel')?.value || '');
      formData.append('bairro', this.form.get('turma')?.value || '');
      formData.append('foto', this.fotoCapturada);
      this.loader = true;

      this.alunosService.cadastrarAluno(formData).subscribe(
        () => {
          this.toast.notify({
            message: 'Aluno cadastrado com sucesso.',
            type: 'SUCCESS',
          });
          this.form.reset();
          this.clearPhoto();
          this.loader = false;
          this.alunosService.steps.next({
            component: 'listar-alunos',
            idAluno: '',
          });
        },
        (error) => {
          console.error('Erro ao cadastrar aluno:', error);
          this.toast.notify({
            message: 'Erro ao cadastrar aluno.',
            type: 'ERROR',
          });
        }
      );
    } else {
      this.toast.notify({
        message: 'Preencha todos os campos obrigatórios e capture uma foto.',
        type: 'WARNING',
      });
    }
  }

  next() {
    const lastIndex = this.steps.findLastIndex((step) => step.active);

    if (lastIndex < this.steps.length - 1) {
      this.steps[lastIndex + 1].active = true;

      if (this.steps[lastIndex + 1].value === 'responsaveis') {
        this.stepRegisterUser = 'responsaveis';
      }

      if (this.steps[lastIndex + 1].value === 'ficha-medica') {
        this.stepRegisterUser = 'ficha-medica';
      }

      if (this.steps[lastIndex + 1].value === 'endereco') {
        this.stepRegisterUser = 'endereco';
      }
      if (this.steps[lastIndex + 1].value === 'selfie-aluno') {
        this.stepRegisterUser = 'selfie-aluno';
      }
    }

    // if (this.form.valid) {
    // } else {
    //   this.camposObrigadores = true;
    // }
  }

  back() {
    const lastIndex = this.steps.findLastIndex((step) => step.active);

    if (lastIndex > 0 && lastIndex <= this.steps.length) {
      this.steps[lastIndex].active = false;

      if (this.steps[lastIndex - 1].value === 'responsaveis') {
        this.stepRegisterUser = 'responsaveis';
      }

      if (this.steps[lastIndex - 1].value === 'ficha-medica') {
        this.stepRegisterUser = 'ficha-medica';
      }

      if (this.steps[lastIndex - 1].value === 'endereco') {
        this.stepRegisterUser = 'endereco';
      }
      if (this.steps[lastIndex - 1].value === 'selfie-aluno') {
        this.stepRegisterUser = 'selfie-aluno';
      }
      if (this.steps[lastIndex - 1].value === 'dados-pessoais') {
        this.stepRegisterUser = 'dados-pessoais';
      }
    } else {
      this.alunosService.steps.next({
        component: 'listar-alunos',
        idAluno: '',
      });
    }
  }

  adicionarResponsavel() {
    if (
      this.adicionarSegundoResponsavel === false &&
      this.adicionarTerceiroResponsavel === false
    ) {
      this.stepsAdicionarResponsavel = 1;
    }
    if (this.stepsAdicionarResponsavel <= 2) {
      this.stepsAdicionarResponsavel++;
    }
    if (this.stepsAdicionarResponsavel === 2) {
      this.adicionarSegundoResponsavel = true;
    }
    if (this.stepsAdicionarResponsavel === 3) {
      this.adicionarTerceiroResponsavel = true;
    }
  }

  retirarResponsavel(value: string) {
    if (value === 'dois') {
      this.adicionarSegundoResponsavel = false;
      this.stepsAdicionarResponsavel--;
    }
    if (value === 'tres') {
      this.adicionarTerceiroResponsavel = false;
      this.stepsAdicionarResponsavel--;
    }
  }

  // back() {
  //   if (this.stepRegisterUser === 'selfie-aluno') {
  //     this.stepRegisterUser = 'ficha-medica';
  //     this.chipSelectedSelfieAluno = false;
  //     return;
  //   }
  //   if (this.stepRegisterUser === 'ficha-medica') {
  //     this.stepRegisterUser = 'dados-pessoais';
  //     this.chipSelectedFichaMedica = false;
  //     return;
  //   }
  //   this.alunosService.steps.next({ component: 'listar-alunos', idAluno: '' });
  // }

  // salvar() {
  //   if (this.stepRegisterUser === 'dados-pessoais') {
  //     this.stepRegisterUser = 'ficha-medica';
  //     this.chipSelectedFichaMedica = true;
  //     return;
  //   }
  //   if (this.stepRegisterUser === 'ficha-medica') {
  //     this.stepRegisterUser = 'selfie-aluno';
  //     this.chipSelectedSelfieAluno = true;
  //     return;
  //   }

  //   // this.turmaService.steps.next('listar-turmas');
  //   // this.toast.notify({
  //   //   message: 'Aluno cadastrado com sucesso.',
  //   //   type: 'SUCCESS',
  //   // });
  // }

  abrirModalCamera() {
    this.modalService.open(AbrirCameraComponent);
  }
}
