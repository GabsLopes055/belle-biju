import { Component } from '@angular/core';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";
import { DividerComponent } from "../../../../../../../../../shared/divider/divider.component";
import { ModalComponent } from "../../../../../../../../../shared/modal/modal.component";
import { OptionSelect, SelectComponent } from "../../../../../../../../../shared/select/select.component";

@Component({
  selector: 'app-remover-aluno',
  standalone: true,
  imports: [ButtonComponent, DividerComponent, ModalComponent, SelectComponent],
  templateUrl: './remover-aluno.component.html',
  styleUrl: './remover-aluno.component.scss'
})
export class RemoverAlunoComponent {

  optionsSelect: OptionSelect[] = [
    {
      label: 'Desistência escolar',
      value: 'Desistência escolar'
    },
    {
      label: 'Mudança de turma',
      value: 'Mudança de turma'
    },
    {
      label: 'Evasão escolar',
      value: 'Evasão escolar'
    },
    {
      label: 'Problemas financeiros',
      value: 'Problemas financeiros'
    },
    {
      label: 'Gravidez na adolescência',
      value: 'Gravidez na adolescência'
    },
    {
      label: 'Trabalho infantil',
      value: 'Trabalho infantil'
    },
    {
      label: 'Dificuldades acadêmicas',
      value: 'Dificuldades acadêmicas'
    },
    {
      label: 'Problemas de saúde',
      value: 'Problemas de saúde'
    },
    {
      label: 'Bullying e violência escolar',
      value: 'Bullying e violência escolar'
    },
    {
      label: 'Falta de motivação ou interesse',
      value: 'Falta de motivação ou interesse'
    },
    {
      label: 'Mudança de residência',
      value: 'Mudança de residência'
    },
    {
      label: 'Problemas familiares',
      value: 'Problemas familiares'
    },
    {
      label: 'Problemas com transporte escolar',
      value: 'Problemas com transporte escolar'
    },
    {
      label: 'Falta de acessibilidade',
      value: 'Falta de acessibilidade'
    },
    {
      label: 'Outro',
      value: 'Outro'
    },
  ]

  constructor(
    private readonly modalService: ModalService
  ){}


  excluir() {
    this.modalService.close();
  }

}
