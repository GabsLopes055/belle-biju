import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from '../../../../../../../shared/modal/modal.component';
import { DividerComponent } from '../../../../../../../shared/divider/divider.component';
import { InputIconComponent } from '../../../../../../../shared/input-icon/input-icon.component';
import { CheckboxComponent } from '../../../../../../../shared/checkbox/checkbox.component';
import { ToggleComponent } from '../../../../../../../shared/toggle/toggle.component';
import { TextareaComponent } from '../../../../../../../shared/textarea/textarea.component';
import { ButtonComponent } from '../../../../../../../shared/button/button.component';
import { OptionSelect, SelectComponent } from '../../../../../../../shared/select/select.component';
import { ChipsComponent } from '../../../../../../../shared/chips/chips.component';
import { ChipsSelectsComponent } from '../../../../../../../shared/chips-selects/chips-selects.component';
import { EditarPesquisaComponent } from '../editar-pesquisa/editar-pesquisa.component';
import { ModalService } from '../../../../../../../shared/modal/modal.service';


@Component({
  selector: 'app-criar-pesquisa',
  standalone: true,
  imports: [
    ModalComponent,
    DividerComponent,
    InputIconComponent,
    CheckboxComponent,
    ToggleComponent,
    TextareaComponent,
    ButtonComponent,
    SelectComponent,
    ChipsComponent,
    ChipsSelectsComponent,
  ],
  templateUrl: './criar-pesquisa.component.html',
  styleUrl: './criar-pesquisa.component.scss',
})
export class CriarPesquisaComponent {
  chips: any[] = [];
  habilitarDatas: boolean = false;

  form = new FormGroup({
    assunto: new FormControl('', Validators.required),
    toggle: new FormControl('', Validators.required),
    perguntaPrincipal: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required),
  });

  formPerguntas = new FormGroup<{ [key: string]: FormControl<string | null> }>({
    pergunta: new FormControl('', Validators.required),
  });

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

  constructor(private readonly modalService: ModalService) {}

  agendar() {
    console.log(this.formPerguntas.value)
    this.modalService.close(EditarPesquisaComponent);
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

  adicionarPerguntas() {
    const novaPergunta = `pergunta${Object.keys(this.formPerguntas.controls).length + 1}`;
    this.formPerguntas.addControl(novaPergunta, new FormControl('', Validators.required));
  }

  get controlNames() {
    return Object.keys(this.formPerguntas.controls);
  }
}
