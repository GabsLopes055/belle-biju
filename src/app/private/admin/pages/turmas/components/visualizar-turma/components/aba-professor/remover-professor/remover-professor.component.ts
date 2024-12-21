import { Component } from '@angular/core';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { ModalComponent } from '../../../../../../../../../shared/modal/modal.component';
import { DividerComponent } from '../../../../../../../../../shared/divider/divider.component';
import { ButtonComponent } from '../../../../../../../../../shared/button/button.component';
import {
  OptionSelect,
  SelectComponent,
} from '../../../../../../../../../shared/select/select.component';

@Component({
  selector: 'app-remover-professor',
  standalone: true,
  imports: [ModalComponent, DividerComponent, ButtonComponent, SelectComponent],
  templateUrl: './remover-professor.component.html',
  styleUrl: './remover-professor.component.scss',
})
export class RemoverProfessorComponent {
  optionSelect: OptionSelect[] = [
    {
      label: 'Afastamento por motivo de saúde',
      value: 'Afastamento por motivo de saúde',
    },
    {
      label: 'Licença maternidade/paternidade',
      value: 'Licença maternidade/paternidade',
    },
    {
      label: 'Aposentadoria',
      value: 'Aposentadoria',
    },
    {
      label: 'Transferência para outra unidade escolar',
      value: 'Transferência para outra unidade escolar',
    },
    {
      label: 'Mudança de localidade',
      value: 'Mudança de localidade',
    },
    {
      label: 'Demissão',
      value: 'Demissão',
    },
    {
      label: 'Exoneração',
      value: 'Exoneração',
    },
    {
      label: 'Licença para capacitação ou formação',
      value: 'Licença para capacitação ou formação',
    },
    {
      label: 'Conflitos com direção escolar',
      value: 'Conflitos com direção escolar',
    },
    {
      label: 'Falta de identificação com a turma ou disciplina',
      value: 'Falta de identificação com a turma ou disciplina',
    },
    {
      label: 'Problemas pessoais',
      value: 'Problemas pessoais',
    },
    {
      label: 'Impossibilidade de cumprir a grade curricular',
      value: 'Impossibilidade de cumprir a grade curricular',
    },
    {
      label: 'Mudança de carreira',
      value: 'Mudança de carreira',
    },
    {
      label: 'Suspensão ou sanção escolar',
      value: 'Suspensão ou sanção escolar',
    },
    {
      label: 'Falta de engajamento ou desmotivação',
      value: 'Falta de engajamento ou desmotivação',
    },
    {
      label: 'Remanejamento de turmas',
      value: 'Remanejamento de turmas',
    },
    {
      label: 'Conflitos com pais ou alunos',
      value: 'Conflitos com pais ou alunos',
    },
    {
      label: 'Licença por motivos jurídicos',
      value: 'Licença por motivos jurídicos',
    },
    {
      label: 'Outro',
      value: 'Outro',
    },
  ];
  constructor(private readonly modalService: ModalService) {}

  excluir() {
    this.modalService.close();
  }
}
