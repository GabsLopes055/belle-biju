import { Component } from '@angular/core';
import { ModalComponent } from '../../../../../../../../../shared/modal/modal.component';
import { ButtonComponent } from '../../../../../../../../../shared/button/button.component';
import {
  StepperComponent,
  steps,
} from '../../../../../../../../../shared/stepper/stepper.component';
import { InputIconComponent } from "../../../../../../../../../shared/input-icon/input-icon.component";
import { TextareaComponent } from "../../../../../../../../../shared/textarea/textarea.component";

@Component({
  selector: 'app-cadastrar-historico',
  standalone: true,
  imports: [ModalComponent, ButtonComponent, StepperComponent, InputIconComponent, TextareaComponent],
  templateUrl: './cadastrar-historico.component.html',
  styleUrl: './cadastrar-historico.component.scss',
})
export class CadastrarHistoricoComponent {
  stepHistorico: 'dados-escola' | 'boletim' | 'observacao' = 'dados-escola';

  steps: steps[] = [
    {
      label: 'Dados da escola',
      value: 'dados-escola',
      active: true,
    },
    {
      label: 'Boletim',
      value: 'boletim',
      active: false,
    },
    {
      label: 'Observação',
      value: 'observacao',
      active: false,
    },
  ];

  next() {
    const lastIndex = this.steps.findLastIndex((step) => step.active);

    console.log(lastIndex);

    if (lastIndex < this.steps.length - 1) {
      this.steps[lastIndex + 1].active = true;

      console.log();

      if (this.steps[lastIndex + 1].value === 'boletim') {
        this.stepHistorico = 'boletim';
      }
      if (this.steps[lastIndex + 1].value === 'observacao') {
        this.stepHistorico = 'observacao';
      }
    }
  }

  back() {
    const lastIndex = this.steps.findLastIndex((step) => step.active);

    if (lastIndex > 0 && lastIndex <= this.steps.length) {
      this.steps[lastIndex].active = false;

      if (this.steps[lastIndex - 1].value === 'boletim') {
        this.stepHistorico = 'boletim';
      }
      if (this.steps[lastIndex - 1].value === 'dados-escola') {
        this.stepHistorico = 'dados-escola';
      }
    }
  }

  salvar() {
    // if (this.stepHistorico === 'dados-pessoais') {
    //   this.stepHistorico = 'ficha-medica';
    //   this.chipSelectedFichaMedica = true;
    //   return;
    // }
    // if (this.stepHistorico === 'ficha-medica') {
    //   this.stepHistorico = 'selfie-aluno';
    //   this.chipSelectedSelfieAluno = true;
    //   return;
    // }

    // this.turmaService.steps.next('listar-turmas');
    // this.toast.notify({
    //   message: 'Aluno cadastrado com sucesso.',
    //   type: 'SUCCESS',
    // });
  }
}
