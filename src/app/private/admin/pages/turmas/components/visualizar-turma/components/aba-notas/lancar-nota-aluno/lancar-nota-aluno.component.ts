import { Component } from '@angular/core';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { Tab, TabsComponent } from '../../../../../../../../../shared/tabs/tabs.component';
import { ModalComponent } from "../../../../../../../../../shared/modal/modal.component";
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";

@Component({
  selector: 'app-lancar-nota-aluno',
  standalone: true,
  imports: [ModalComponent, TabsComponent, ButtonComponent],
  templateUrl: './lancar-nota-aluno.component.html',
  styleUrl: './lancar-nota-aluno.component.scss'
})
export class LancarNotaAlunoComponent {

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


  chosenTab(tab: string) {
    this.opcaoTabSelecionada = tab;
  }

  fechar() {
    this.modalService.close();
  }
}
