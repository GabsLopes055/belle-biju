import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlunosService } from '../../../../alunos.service';
import { ToastService } from '../../../../../../../../shared/toast/toast.service';
import { ModalService } from '../../../../../../../../shared/modal/modal.service';
import { AbrirCameraComponent } from '../../../cadastrar-aluno/components/abrir-camera/abrir-camera.component';
import { InputIconComponent } from '../../../../../../../../shared/input-icon/input-icon.component';
import { ButtonComponent } from '../../../../../../../../shared/button/button.component';
import { SelectComponent } from '../../../../../../../../shared/select/select.component';
import { alunoResponse } from '../../../../../../../../models/alunos.interface';

@Component({
  selector: 'editar-aluno',
  standalone: true,
  imports: [InputIconComponent, ButtonComponent, SelectComponent],
  templateUrl: './editar-aluno.component.html',
  styleUrl: './editar-aluno.component.scss',
})
export class EditarAlunoComponent {

  camposObrigadores: boolean = false;
  stepsAdicionarResponsavel: number = 1;
  adicionarPrimeiroResponsavel: boolean = false;
  adicionarSegundoResponsavel: boolean = false;
  adicionarTerceiroResponsavel: boolean = false;
  aluno!: alunoResponse;
  idAluno: string = '';

  form = new FormGroup({
    id: new FormControl('', Validators.required),
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



  constructor(
    private readonly alunosService: AlunosService,
    private readonly toast: ToastService,
    private readonly modalService: ModalService
  ) {
    this.alunosService.steps.subscribe((value) => {
      if (value.idAluno != null) {
        this.idAluno = value.idAluno;
      }
    });
    this.buscarAlunoPorId();
  }

  buscarAlunoPorId() {
    this.alunosService.buscarAlunoPorId(this.idAluno).subscribe({
      next: (value) => {
        this.aluno = value;

        this.form.controls.id.setValue(value.id);
        this.form.controls.nome.setValue(value.nome);
        this.form.controls.cpf.setValue(value.cpf);
        this.form.controls.dataNascimento.setValue(value.dataNascimento);
        this.form.controls.genero.setValue(value.genero);
        this.form.controls.alergias.setValue(value.alergias);
        this.form.controls.medicacao.setValue(value.medicacao);
        this.form.controls.condicaoMedica.setValue(value.condicaoMedica);
        this.form.controls.nomeResponsavel.setValue(value.nomeResponsavel);
        this.form.controls.emailResponsavel.setValue(value.emailResponsavel);
        this.form.controls.endereco.setValue(value.endereco);
        this.form.controls.cep.setValue(value.cep);
        this.form.controls.cidade.setValue(value.cidade);
        this.form.controls.uf.setValue(value.uf);
        this.form.controls.bairro.setValue(value.bairro);
        this.form.controls.numeroEndereco.setValue(value.numeroEndereco);
        this.form.controls.complemento.setValue(value.complemento);

      },
    });
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

  salvar() {
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

  back() {
    this.alunosService.steps.next({
      component: 'ver-aluno',
      idAluno: this.form.controls.id.value as string,
    });
  }

  abrirModalCamera() {
    this.modalService.open(AbrirCameraComponent);
  }
}
