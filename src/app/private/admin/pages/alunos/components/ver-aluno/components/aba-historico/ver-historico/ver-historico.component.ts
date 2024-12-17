import { Component } from '@angular/core';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { ButtonComponent } from '../../../../../../../../../shared/button/button.component';
import { ModalComponent } from '../../../../../../../../../shared/modal/modal.component';
import {
  Tab,
  TabsComponent,
} from '../../../../../../../../../shared/tabs/tabs.component';
import { DadosPessoaisColaboradorComponent } from "../../../../../../colaboradores/components/ver-colaborador/components/aba-dados-pessoais/dados-pessoais-colaborador/dados-pessoais-colaborador.component";
import { DadosEscolaComponent } from "./components/dados-escola/dados-escola.component";
import { BoletimEscolarComponent } from "./components/boletim-escolar/boletim-escolar.component";
import { ObservacaoHistoricoComponent } from "./components/observacao-historico/observacao-historico.component";

@Component({
  selector: 'app-ver-historico',
  standalone: true,
  imports: [ButtonComponent, ModalComponent, TabsComponent, DadosPessoaisColaboradorComponent, DadosEscolaComponent, BoletimEscolarComponent, ObservacaoHistoricoComponent],
  templateUrl: './ver-historico.component.html',
  styleUrl: './ver-historico.component.scss',
})
export class VerHistoricoComponent {
  opcaoTabSelecionada = '';

  tabs: Tab[] = [
    {
      icon: '',
      label: 'Dados da Escola',
      value: 'dados-escola',
      selected: false,
    },
    {
      icon: '',
      label: 'Boletim',
      value: 'boletim',
      selected: false,
    },
    {
      icon: '',
      label: 'Observação',
      value: 'observacao',
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
