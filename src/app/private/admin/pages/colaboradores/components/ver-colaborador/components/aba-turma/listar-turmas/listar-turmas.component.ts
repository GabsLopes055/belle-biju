import { Component } from '@angular/core';
import { InputIconComponent } from '../../../../../../../../../shared/input-icon/input-icon.component';
import { ListComponent } from '../../../../../../../../../shared/list/list.component';
import { HeaderListComponent } from '../../../../../../../../../shared/list/components/header-list/header-list.component';
import { HeaderColComponent } from '../../../../../../../../../shared/list/components/header-col/header-col.component';
import { ItemListComponent } from '../../../../../../../../../shared/list/components/item-list/item-list.component';
import { ItemDataComponent } from '../../../../../../../../../shared/list/components/item-data/item-data.component';
import { turma } from '../../../../../../../../../models/turma.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'listar-turmas',
  standalone: true,
  imports: [
    InputIconComponent,
    ListComponent,
    HeaderListComponent,
    HeaderColComponent,
    ItemListComponent,
    ItemDataComponent,
  ],
  templateUrl: './listar-turmas.component.html',
  styleUrl: './listar-turmas.component.scss',
})
export class ListarTurmasComponent {
  data: turma[] = [
    {
      nome: '8° Ano - Turma A',
      serie: '8º ano',
      anoLetivo: '2024',
      periodo: 'Manhã',
    },
    {
      nome: '8° Ano - Turma A',
      serie: '8º ano',
      anoLetivo: '2024',
      periodo: 'Manhã',
    },
    {
      nome: '8° Ano - Turma A',
      serie: '8º ano',
      anoLetivo: '2024',
      periodo: 'Manhã',
    },
    {
      nome: '8° Ano - Turma A',
      serie: '8º ano',
      anoLetivo: '2024',
      periodo: 'Manhã',
    },
  ];

  form = new FormGroup({
    buscarTurma: new FormControl('', Validators.required),
  });
}
