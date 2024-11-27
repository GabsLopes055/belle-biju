import { Component } from '@angular/core';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";
import { ModalComponent } from "../../../../../../../../../shared/modal/modal.component";
import { Tab, TabsComponent } from '../../../../../../../../../shared/tabs/tabs.component';
import { DadosPessoaisComponent } from "./components/dados-pessoais/dados-pessoais.component";
import { DetalhesTransferenciaComponent } from "./components/detalhes-transferencia/detalhes-transferencia.component";
import { InformacoesAcademicasComponent } from "./components/informacoes-academicas/informacoes-academicas.component";
import { HistoricoComportamentoComponent } from "./components/historico-comportamento/historico-comportamento.component";
import { FichaMedicaComponent } from "./components/ficha-medica/ficha-medica.component";
import { DocumentosComponent } from "./components/documentos/documentos.component";

@Component({
  selector: 'app-ver-historico',
  standalone: true,
  imports: [ButtonComponent, ModalComponent, TabsComponent, DadosPessoaisComponent, DetalhesTransferenciaComponent, InformacoesAcademicasComponent, HistoricoComportamentoComponent, FichaMedicaComponent, DocumentosComponent],
  templateUrl: './ver-historico.component.html',
  styleUrl: './ver-historico.component.scss'
})
export class VerHistoricoComponent {

  opcaoTabSelecionada = '';

  tabs: Tab[] = [
    {
      icon: '',
      label: 'Dados Pessoais',
      value: 'dados-pessoais',
      selected: false,
    },
    {
      icon: '',
      label: 'Detalhes da Transferência',
      value: 'detalhes-transferencia',
      selected: false,
    },
    {
      icon: '',
      label: 'Informações Acadêmicas',
      value: 'informacoes-academicas',
      selected: false,
    },
    {
      icon: '',
      label: 'Histórico de Comportamento',
      value: 'historico-comportamento',
      selected: false,
    },
    {
      icon: '',
      label: 'Ficha Médica',
      value: 'ficha-medica',
      selected: false,
    },
    {
      icon: '',
      label: 'Documentos',
      value: 'documentos',
      selected: false,
    }

  ];

  constructor(
    private readonly modalService: ModalService
  ){}

  chosenTab(tab: string) {
    this.opcaoTabSelecionada = tab;
  }

  fechar() {
    this.modalService.close();
  }
}
