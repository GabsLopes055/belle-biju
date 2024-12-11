import { Component } from '@angular/core';
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
    SelectComponent
  ],
  templateUrl: './grid-editable.component.html',
  styleUrl: './grid-editable.component.scss'
})
export class GridEditableComponent {

  dados: GridEditableData = {
    nameGroup: {
      Label: 'Nome',
      value: [
        {nome: new FormControl('Jonathan')},
        {nome: new FormControl('Emille')},
        {nome: new FormControl('Gabriel')},
        {nome: new FormControl('Iran')},
      ]
    },
    personal: [
      // {
      //   label: 'idade',
      //   typeInput: 'text',
      //   value: [1,2]
      // },
      // {
      //   label: 'Sexo',
      //   typeInput: 'text',
      //   value: ['Masculino','Feminino']
      // },
      // {
      //   label: 'Cor',
      //   typeInput: 'text',
      //   value: ['Red','Green']
      // }
    ]
  }


  newColumn() {
    const emptyValues = Array(this.dados.nameGroup.value.length).fill(''); // Cria um array de valores vazios com o mesmo tamanho de nameGroup.value
    this.dados.personal.push({
      label: 'Altura',
      typeInput: 'date',
      optionSelect: [],
      value: emptyValues
    });
    this.dados.personal.push({
      label: 'Cor',
      typeInput: 'select',
      optionSelect: [
        {label: 'vermelho', value: 'red'},
        {label: 'verde', value: 'green'},
      ],
      value: emptyValues
    });
    this.dados.personal.push({
      label: 'Idade',
      typeInput: 'number',
      optionSelect: [],
      value: emptyValues
    });
  }

}
export interface NameGroup {
  Label: string;
  value: Array<{ nome: FormControl }>;
}

export interface PersonalField<T = string | number> {
  label: string;
  typeInput: string;
  optionSelect: OptionSelect[];
  value: T[];
}

export interface GridEditableData {
  nameGroup: NameGroup;
  personal: PersonalField[];
}
