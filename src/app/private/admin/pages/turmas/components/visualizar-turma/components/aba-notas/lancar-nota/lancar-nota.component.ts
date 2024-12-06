import { Component } from '@angular/core';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { ButtonComponent } from '../../../../../../../../../shared/button/button.component';
import { ModalComponent } from '../../../../../../../../../shared/modal/modal.component';
import {
  Tab,
  TabsComponent,
} from '../../../../../../../../../shared/tabs/tabs.component';
import { PrimeiroBimestreComponent } from "./components/primeiro-bimestre/primeiro-bimestre.component";

@Component({
  selector: 'lancar-nota',
  standalone: true,
  imports: [ButtonComponent, ModalComponent, TabsComponent, PrimeiroBimestreComponent],
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


  chosenTab(tab: string) {
    this.opcaoTabSelecionada = tab;
  }

  fechar() {
    this.modalService.close();
  }
}
