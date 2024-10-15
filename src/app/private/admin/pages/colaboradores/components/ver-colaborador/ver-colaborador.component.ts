import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { turma } from '../../../../../../models/turma.interface';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { InputIconComponent } from '../../../../../../shared/input-icon/input-icon.component';
import { HeaderColComponent } from '../../../../../../shared/list/components/header-col/header-col.component';
import { HeaderListComponent } from '../../../../../../shared/list/components/header-list/header-list.component';
import { ItemDataComponent } from '../../../../../../shared/list/components/item-data/item-data.component';
import { ItemListComponent } from '../../../../../../shared/list/components/item-list/item-list.component';
import { ListComponent } from '../../../../../../shared/list/list.component';
import { ModalService } from '../../../../../../shared/modal/modal.service';
import { Tab, TabsComponent } from '../../../../../../shared/tabs/tabs.component';
import { AlunosService } from '../../../alunos/alunos.service';
import {
  VerChamadaComponent,
} from '../../../turmas/components/visualizar-turma/components/aba-chamada/ver-chamada/ver-chamada.component';
import { ExcluirColaboradorComponent } from '../excluir-colaborador/excluir-colaborador.component';
import { ColaboradoresService } from '../../colaboradores.service';

@Component({
  selector: 'ver-colaborador',
  standalone: true,
  imports: [ButtonComponent, InputIconComponent, ListComponent, HeaderListComponent, HeaderColComponent, ItemListComponent, ItemDataComponent, TabsComponent],
  templateUrl: './ver-colaborador.component.html',
  styleUrl: './ver-colaborador.component.scss'
})
export class VerColaboradorComponent {

  data: turma[] = [
    { nome: '8° Ano - Turma A', periodo: 'Manhã' },
    { nome: '8° Ano - Turma B', periodo: 'Tarde' },
    { nome: '8° Ano - Turma C', periodo: 'Manhã' },
    { nome: '8° Ano - Turma D', periodo: 'Tarde' },
    { nome: '8° Ano - Turma E', periodo: 'Manhã' }
  ];

  tabs: Tab[] = [
    {
      icon: '',
      label: 'Turmas',
      value: 'turmas',
      selected: false,
    },
    {
      icon: '',
      label: 'Chamadas',
      value: 'chamadas',
      selected: false,
    },
  ];

  opcaoTabSelecionada = '';

  form = new FormGroup({
    buscarTurma: new FormControl('', Validators.required),
  });

  constructor(
    private readonly colaboradoresService: ColaboradoresService,
    private readonly modalService: ModalService

  ) {}

  chosenTab(tab: string) {
    this.opcaoTabSelecionada = tab;
  }

  verChamada() {
    this.modalService.open(VerChamadaComponent)
  }

  excluir() {
    this.modalService.open(ExcluirColaboradorComponent);
  }

  back() {
    this.colaboradoresService.steps.next('listar-colaboradores');
  }
}
