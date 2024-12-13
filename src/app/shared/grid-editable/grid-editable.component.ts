import {Component, input, OnInit} from '@angular/core';
import {InputIconComponent} from "../input-icon/input-icon.component";
import {ListComponent} from "../list/list.component";
import {HeaderListComponent} from "../list/components/header-list/header-list.component";
import {HeaderColComponent} from "../list/components/header-col/header-col.component";
import {ItemListComponent} from "../list/components/item-list/item-list.component";
import {ItemDataComponent} from "../list/components/item-data/item-data.component";
import {InputComponent} from "../input/input.component";
import {ButtonComponent} from "../button/button.component";
import {InputViewComponent} from "../input-view/input-view.component";
import {FormControl} from "@angular/forms";
import {OptionSelect, SelectComponent} from "../select/select.component";
import {JsonPipe} from "@angular/common";
import {ModalService} from "../modal/modal.service";
import {NewColumnComponent} from "./components/new-column/new-column.component";

@Component({
  selector: 'grid-editable',
  standalone: true,
  imports: [
    InputIconComponent,
    ListComponent,
    HeaderListComponent,
    HeaderColComponent,
    ItemListComponent,
    ItemDataComponent,
    InputComponent,
    ButtonComponent,
    InputViewComponent,
    SelectComponent,
    JsonPipe
  ],
  templateUrl: './grid-editable.component.html',
  styleUrl: './grid-editable.component.scss'
})
export class GridEditableComponent implements OnInit {


  labelButton = input('+ Adicionar Coluna')

  valueCount: number[] = [];

  dados: GridEditableData = {
    nameGroup: {
      Label: 'Nome',
      value: [
        {nome: new FormControl('Jonathan')},
        {nome: new FormControl('Emille')},
        {nome: new FormControl('Gabriel')},
        {nome: new FormControl('Iran')},
        {nome: new FormControl('Jonathan')},
        {nome: new FormControl('Emille')},
        {nome: new FormControl('Gabriel')},
        {nome: new FormControl('Iran')},
      ]
    },
    personal: []
  }

  constructor(
    private readonly modal: ModalService
  ) {
  }

  ngOnInit(): void {
    this.popular();
  }

  newColumn() {
    this.modal.open(NewColumnComponent);

    const emptyValues = Array(this.dados.nameGroup.value.length).fill(''); // Cria um array de valores vazios com o mesmo tamanho de nameGroup.value
    this.dados.personal.push({
      column: {
        typeLabel: 'text',
        label: 'Data Nascimento',
        optionSelect: [],
        controlInput: new FormControl(),
        ControlSelect: new FormControl()
      },
      typeInput: 'date',
      optionSelect: [],
      value: emptyValues
    });


    this.dados.personal.push({
      column: {
        typeLabel: 'text',
        label: 'Color',
        optionSelect:[],
        controlInput: new FormControl(),
        ControlSelect: new FormControl()
      },
      typeInput: 'select',
      optionSelect: [
        {label: 'vermelho', value: 'red'},
        {label: 'verde', value: 'green'},
      ],
      value: emptyValues
    });
    this.dados.personal.push({
      column: {
        typeLabel: 'text',
        label: 'Idade',
        optionSelect:[],
        controlInput: new FormControl(),
        ControlSelect: new FormControl()
      },
      typeInput: 'number',
      optionSelect: [],
      value: emptyValues
    });
    this.dados.personal.push({
      column: {
        typeLabel: 'select_and_date',
        label: '',
        controlInput: new FormControl(),
        ControlSelect: new FormControl(),
        optionSelect: [
          {label: 'Prova', value: 'red'},
          {label: 'Trabalho', value: 'green'},
        ],
      },
      typeInput: 'number',
      optionSelect: [],
      value: emptyValues
    });
  }

  popular(): void {
    const length = this.dados.nameGroup.value.length; // Obtém o comprimento do array nameGroup.value
    this.valueCount = Array.from({ length }, (_, i) => i + 1); // Gera um array sequencial [1, 2, ..., length]
  }

  protected readonly FormControl = FormControl;
}
export interface NameGroup {
  Label: string;
  value: Array<{ nome: FormControl }>;
}

export interface PersonalField<T = string | number> {
  column: ColumnGrid;
  typeInput: string;
  optionSelect: OptionSelect[];
  value: T[];
}

export interface ColumnGrid {
  typeLabel: 'text' | 'select' | 'input' | 'select_and_date';
  label: string;
  controlInput: FormControl;
  ControlSelect: FormControl;
  optionSelect: OptionSelect[];
}

export interface GridEditableData {
  nameGroup: NameGroup;
  personal: PersonalField[];
}
