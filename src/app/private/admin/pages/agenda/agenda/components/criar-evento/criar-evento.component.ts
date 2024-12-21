import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from '../../../../../../../shared/modal/modal.component';
import { ButtonComponent } from '../../../../../../../shared/button/button.component';
import { DividerComponent } from '../../../../../../../shared/divider/divider.component';
import { InputIconComponent } from '../../../../../../../shared/input-icon/input-icon.component';
import { CheckboxComponent } from '../../../../../../../shared/checkbox/checkbox.component';
import { ToggleComponent } from '../../../../../../../shared/toggle/toggle.component';
import { TextareaComponent } from '../../../../../../../shared/textarea/textarea.component';
import { OptionSelect, SelectComponent } from '../../../../../../../shared/select/select.component';
import { ChipsSelectsComponent } from '../../../../../../../shared/chips-selects/chips-selects.component';
import { ModalService } from '../../../../../../../shared/modal/modal.service';



@Component({
  selector: 'app-criar-evento',
  standalone: true,
  imports: [
    ModalComponent,
    ButtonComponent,
    DividerComponent,
    InputIconComponent,
    CheckboxComponent,
    ToggleComponent,
    TextareaComponent,
    SelectComponent,
    ChipsSelectsComponent
],
  templateUrl: './criar-evento.component.html',
  styleUrl: './criar-evento.component.scss',
})
export class CriarEventoComponent {

  chips: any[] = [];
  habilitarDatas: boolean = false;

  form = new FormGroup({
    assunto: new FormControl('', Validators.required),
    toggle: new FormControl('', Validators.required),
    data: new FormControl('', Validators.required),
    hora: new FormControl('', Validators.required),
  });

  constructor(
    private readonly modalService: ModalService
  ){}

  optionsPerfis: OptionSelect[] = [
    {
      label: 'Todos',
      value: 'todos',
    },
    {
      label: 'Professores',
      value: 'professores',
    },
    {
      label: 'Pais',
      value: 'pais',
    },
    {
      label: 'Coordenadores',
      value: 'coordenadores',
    },
    {
      label: 'Diretoria',
      value: 'diretoria',
    },
  ];

  optionsCategoria: OptionSelect[] = [
    {
      label: 'Reuniões',
      value: 'Reuniões'
    },
    {
      label: 'Comunicados',
      value: 'Comunicados'
    },
    {
      label: 'Atividades Acadêmicas',
      value: 'Atividades Acadêmicas'
    },
    {
      label: 'Evento especial',
      value: 'Evento especial'
    },
    {
      label: 'Atividades Extraescolares',
      value: 'Atividades Extraescolares'
    },
    {
      label: 'Assuntos Administrativos',
      value: 'Assuntos Administrativos'
    },
  ]

  agendar() {
    // console.log(this.formPerguntas.value)
    this.modalService.close(CriarEventoComponent);
  }

  eventSelect(event: any) {
    this.chips.push(event);
    const index = this.optionsPerfis.findIndex(
      (value) => value.value === event
    );

    if (index !== -1) {
      this.optionsPerfis.splice(index, 1);
    }
  }

  eventChip(event: boolean) {
    const chipIndex = this.chips.findIndex((chip) => chip === event);
    console.log(chipIndex);
    if (chipIndex !== -1) {
      this.chips.splice(chipIndex, 1);
    }

    // falta pegar o valor que foi excluir e adicionar novamente aos options
  }

  eventToggle(event: any) {
    this.habilitarDatas = event;
  }
}
