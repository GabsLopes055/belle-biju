import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { InputIconComponent } from '../../../../../../shared/input-icon/input-icon.component';
import { HeaderColComponent } from '../../../../../../shared/list/components/header-col/header-col.component';
import { HeaderListComponent } from '../../../../../../shared/list/components/header-list/header-list.component';
import { ItemDataComponent } from '../../../../../../shared/list/components/item-data/item-data.component';
import { ItemListComponent } from '../../../../../../shared/list/components/item-list/item-list.component';
import { ListComponent } from '../../../../../../shared/list/list.component';
import { ModalService } from '../../../../../../shared/modal/modal.service';
import { Tab, TabsComponent } from '../../../../../../shared/tabs/tabs.component';
import { ListarTurmasComponent } from '../../components/ver-colaborador/components/aba-turma/listar-turmas/listar-turmas.component';
import {
  ListarChamadasComponent,
} from '../../components/ver-colaborador/components/aba-chamadas/listar-chamadas/listar-chamadas.component';
import { ColaboradoresService } from '../../colaboradores.service';
import { ExcluirColaboradorComponent } from './components/excluir-colaborador/excluir-colaborador.component';
import { InformacoesColaboradorComponent } from './components/informacoes-colaborador/informacoes-colaborador.component';

@Component({
  selector: 'ver-colaborador',
  standalone: true,
  imports: [
    ButtonComponent,
    InputIconComponent,
    ListComponent,
    HeaderListComponent,
    HeaderColComponent,
    ItemListComponent,
    ItemDataComponent,
    TabsComponent,
    ListarChamadasComponent,
    ListarTurmasComponent
],
  templateUrl: './ver-colaborador.component.html',
  styleUrl: './ver-colaborador.component.scss',
})
export class VerColaboradorComponent {

  isDetail = false;



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

  excluir() {
    this.isDetail = false;
    this.modalService.open(ExcluirColaboradorComponent);
  }

  informacoesColaborador() {
    this.isDetail = false;
    this.modalService.open(InformacoesColaboradorComponent);
  }

  back() {
    this.colaboradoresService.steps.next('listar-colaboradores');
  }

  editarColaborador() {
    this.isDetail = false;
    this.colaboradoresService.steps.next('editar-colaborador');
  }

  showHideDetail() {
    this.isDetail = !this.isDetail;
  }
}
