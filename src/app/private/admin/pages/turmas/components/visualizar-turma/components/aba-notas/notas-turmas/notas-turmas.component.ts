import { OptionSelect } from './../../../../../../../../../shared/select/select.component';
import { Component } from '@angular/core';
import { notasPorBimestre } from '../../../../../../../../../models/notas.interface';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LancarNotaComponent } from '../lancar-nota/lancar-nota.component';
import { ChipsComponent } from '../../../../../../../../../shared/chips/chips.component';
import { ButtonComponent } from '../../../../../../../../../shared/button/button.component';
import { InputIconComponent } from '../../../../../../../../../shared/input-icon/input-icon.component';
import { ListComponent } from '../../../../../../../../../shared/list/list.component';
import { HeaderListComponent } from '../../../../../../../../../shared/list/components/header-list/header-list.component';
import { HeaderColComponent } from '../../../../../../../../../shared/list/components/header-col/header-col.component';
import { ItemListComponent } from '../../../../../../../../../shared/list/components/item-list/item-list.component';
import { ItemDataComponent } from '../../../../../../../../../shared/list/components/item-data/item-data.component';
import { SelectComponent } from '../../../../../../../../../shared/select/select.component';
import { ButtonSelectComponent } from "../../../../../../../../../shared/button-select/button-select.component";

@Component({
  selector: 'notas-turmas',
  standalone: true,
  imports: [
    ChipsComponent,
    ButtonComponent,
    InputIconComponent,
    ListComponent,
    HeaderListComponent,
    HeaderColComponent,
    ItemListComponent,
    ItemDataComponent,
    SelectComponent,
    ButtonSelectComponent
],
  templateUrl: './notas-turmas.component.html',
  styleUrl: './notas-turmas.component.scss',
})
export class NotasTurmasComponent {
  chipSelected: string = 'Língua Portuguesa';
  optionSelect: OptionSelect[] = [
    { label: ' 1º Bimestre', value: 'primeiroBimestre' },
    { label: ' 2º Bimestre', value: 'primeiroBimestre' },
    { label: ' 3º Bimestre', value: 'primeiroBimestre' },
    { label: ' 4º Bimestre', value: 'primeiroBimestre' },
  ];
  data: notasPorBimestre[] = [
    {
      nomeAluno: '[Nome do Aluno]',
      primeiroBimestre: '7,0',
      segundoBimestre: '0,0',
      terceiroBimestre: '0,0',
      quartoBimestre: '0,0',
      media: '- -',
    },
    {
      nomeAluno: '[Nome do Aluno]',
      primeiroBimestre: '7,0',
      segundoBimestre: '0,0',
      terceiroBimestre: '0,0',
      quartoBimestre: '0,0',
      media: '- -',
    },
    {
      nomeAluno: '[Nome do Aluno]',
      primeiroBimestre: '7,0',
      segundoBimestre: '0,0',
      terceiroBimestre: '0,0',
      quartoBimestre: '0,0',
      media: '- -',
    },
    {
      nomeAluno: '[Nome do Aluno]',
      primeiroBimestre: '7,0',
      segundoBimestre: '0,0',
      terceiroBimestre: '0,0',
      quartoBimestre: '0,0',
      media: '- -',
    },
    {
      nomeAluno: '[Nome do Aluno]',
      primeiroBimestre: '7,0',
      segundoBimestre: '0,0',
      terceiroBimestre: '0,0',
      quartoBimestre: '0,0',
      media: '- -',
    },
    {
      nomeAluno: '[Nome do Aluno]',
      primeiroBimestre: '7,0',
      segundoBimestre: '0,0',
      terceiroBimestre: '0,0',
      quartoBimestre: '0,0',
      media: '- -',
    },
  ];

  constructor(private readonly modalService: ModalService) {}

  form = new FormGroup({
    buscarTurma: new FormControl('', Validators.required),
  });

  eventChipSelected(event: string, materia: string) {
    if (event === materia) {
      this.chipSelected = event;
    }
  }

  lancarNota() {
    this.modalService.open(LancarNotaComponent);
  }
}
