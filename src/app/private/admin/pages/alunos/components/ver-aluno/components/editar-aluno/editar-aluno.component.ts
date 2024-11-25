import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlunosService } from '../../../../alunos.service';
import { ToastService } from '../../../../../../../../shared/toast/toast.service';
import { ModalService } from '../../../../../../../../shared/modal/modal.service';
import { AbrirCameraComponent } from '../../../cadastrar-aluno/components/abrir-camera/abrir-camera.component';
import { InputIconComponent } from "../../../../../../../../shared/input-icon/input-icon.component";
import { ButtonComponent } from "../../../../../../../../shared/button/button.component";
import { SelectComponent } from "../../../../../../../../shared/select/select.component";

@Component({
  selector: 'editar-aluno',
  standalone: true,
  imports: [InputIconComponent, ButtonComponent, SelectComponent],
  templateUrl: './editar-aluno.component.html',
  styleUrl: './editar-aluno.component.scss'
})
export class EditarAlunoComponent {



  form = new FormGroup({

    id: new FormControl('', Validators.required),
    nome: new FormControl('Lucas Costa', Validators.required),
    dataNascimento: new FormControl('23/10/2024', Validators.required),
    genero: new FormControl('Masculino', Validators.required),
    alergias: new FormControl('', Validators.required),
    medicacaoNecessaria: new FormControl('', Validators.required),
    CondicoesMedicas: new FormControl('', Validators.required),
    responsavel: new FormControl('Sergio Costa', Validators.required),
    email: new FormControl('sergiocosta@gmail.com', [Validators.required, Validators.email]),
    endereco: new FormControl('Av. Vicente Machado', [Validators.required]),
    bairro: new FormControl('Santa Rosa', Validators.required),
    numeroCasa: new FormControl('55', Validators.required),
    complementoCasa: new FormControl('Casa', Validators.required),
    foto_aluno: new FormControl(null)
  });

  constructor(
    private readonly alunosService: AlunosService,
    private readonly toast: ToastService,
    private readonly modalService: ModalService
  ) {}



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

  back(){
    this.alunosService.steps.next({component: 'ver-aluno', idAluno: this.form.controls.id.value as string});
  }

  abrirModalCamera() {
    this.modalService.open(AbrirCameraComponent);
  }
}
