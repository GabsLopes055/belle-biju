import { Component } from '@angular/core';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { ButtonComponent } from '../../../../../../../../../shared/button/button.component';
import { ModalComponent } from '../../../../../../../../../shared/modal/modal.component';
import { LancarNotaAlunoComponent } from './components/lancar-nota-aluno/lancar-nota-aluno.component';
import {
  Tab,
  TabsComponent,
} from '../../../../../../../../../shared/tabs/tabs.component';

@Component({
  selector: 'lancar-nota',
  standalone: true,
  imports: [ButtonComponent, ModalComponent, TabsComponent],
  templateUrl: './lancar-nota.component.html',
  styleUrl: './lancar-nota.component.scss',
})
export class LancarNotaComponent {

  opcaoTabSelecionada = '';

  tabs: Tab[] = [
    {
      icon: '',
      label: '1º Bimestre',
      value: 'primeiro-bimestre',
      selected: false,
    },
    {
      icon: '',
      label: '2º Bimestre',
      value: 'segundo-bimestre',
      selected: false,
    },
    {
      icon: '',
      label: '3º Bimestre',
      value: 'terceiro-bimestre',
      selected: false,
    },
    {
      icon: '',
      label: '4º Bimestre',
      value: 'quarto-bimestre',
      selected: false,
    },
    {
      icon: '',
      label: 'Geral',
      value: 'geral',
      selected: false,
    },
  ];

  constructor(private readonly modalService: ModalService) {}

  editarNota() {
    // this.modalService.open(EditarAdvertenciaComponent)
  }

  abrirModalLancarNota() {
    this.modalService.open(LancarNotaAlunoComponent);
  }

  chosenTab(tab: string) {
    this.opcaoTabSelecionada = tab;
  }

  fechar() {
    this.modalService.close();
  }
}
