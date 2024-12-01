import { Component } from '@angular/core';
import { Tab, TabsComponent } from '../../../../../../shared/tabs/tabs.component';
import { ModalService } from '../../../../../../shared/modal/modal.service';
import { ModalComponent } from "../../../../../../shared/modal/modal.component";
import { ButtonComponent } from "../../../../../../shared/button/button.component";
import { PerguntaComponent } from "./components/pergunta/pergunta.component";
import { RespostaComponent } from "./components/resposta/resposta.component";

@Component({
  selector: 'app-ver-pesquisa',
  standalone: true,
  imports: [ModalComponent, TabsComponent, ButtonComponent, PerguntaComponent, RespostaComponent],
  templateUrl: './ver-pesquisa.component.html',
  styleUrl: './ver-pesquisa.component.scss',
})
export class VerPesquisaComponent {
  opcaoTabSelecionada = '';

  tabs: Tab[] = [
    {
      icon: '',
      label: 'Pergunta',
      value: 'pergunta',
      selected: false,
    },
    {
      icon: '',
      label: 'Resposta',
      value: 'resposta',
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
