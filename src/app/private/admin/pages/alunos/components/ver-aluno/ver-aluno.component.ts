import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { advertencias } from '../../../../../../models/advertencias.interface';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { InputIconComponent } from '../../../../../../shared/input-icon/input-icon.component';
import { HeaderColComponent } from '../../../../../../shared/list/components/header-col/header-col.component';
import { HeaderListComponent } from '../../../../../../shared/list/components/header-list/header-list.component';
import { ItemDataComponent } from '../../../../../../shared/list/components/item-data/item-data.component';
import { ItemListComponent } from '../../../../../../shared/list/components/item-list/item-list.component';
import { ListComponent } from '../../../../../../shared/list/list.component';
import { ModalService } from '../../../../../../shared/modal/modal.service';
import {
  Tab,
  TabsComponent,
} from '../../../../../../shared/tabs/tabs.component';
import { AlunosService } from '../../alunos.service';
import { AbaFrequenciaComponent } from './components/aba-frequencia/aba-frequencia.component';
import { ExcluirAlunoComponent } from './components/excluir-aluno/excluir-aluno.component';
import { InformacoesAlunoComponent } from './components/informacoes-aluno/informacoes-aluno.component';
import { alunoResponse } from '../../../../../../models/alunos.interface';
import { ToastService } from '../../../../../../shared/toast/toast.service';
import { DashboardComponent } from "./components/aba-dashboard/dashboard/dashboard.component";
import { ListarNotasComponent } from "./components/aba-notas/listar-notas/listar-notas.component";
import { ListarMeritosComponent } from "./components/aba-meritos/listar-meritos/listar-meritos.component";
import { ListarAdvertenciaComponent } from "./components/aba-advertencia/listar-advertencia/listar-advertencia.component";
import { AbaFichaMedicaComponent } from "./components/aba-ficha-medica/aba-ficha-medica.component";
import { ListarHistoricoComponent } from "./components/aba-historico/listar-historico/listar-historico.component";
import { AbaDadosPessoaisComponent } from "./components/aba-dados-pessoais/aba-dados-pessoais.component";
import { ListarDocumentosComponent } from "./components/aba-enviar-documento/listar-documentos/listar-documentos.component";

@Component({
  selector: 'ver-aluno',
  standalone: true,
  imports: [
    ButtonComponent,
    TabsComponent,
    InputIconComponent,
    ListComponent,
    HeaderListComponent,
    HeaderColComponent,
    ItemListComponent,
    ItemDataComponent,
    AbaFrequenciaComponent,
    DashboardComponent,
    ListarNotasComponent,
    ListarMeritosComponent,
    ListarAdvertenciaComponent,
    AbaFichaMedicaComponent,
    ListarHistoricoComponent,
    AbaDadosPessoaisComponent,
    ListarDocumentosComponent
],
  templateUrl: './ver-aluno.component.html',
  styleUrl: './ver-aluno.component.scss',
})
export class VerAlunoComponent implements OnInit {
  isDetail = false;
  // @Input() idAluno!: string;
  idAluno: string = '';

  aluno!: alunoResponse;

  tabs: Tab[] = [
    {
      icon: '',
      label: 'Dashboard',
      value: 'dashboard',
      selected: false,
    },
    {
      icon: '',
      label: 'Frequência',
      value: 'frequencia',
      selected: false,
    },
    {
      icon: '',
      label: 'Notas',
      value: 'notas',
      selected: false,
    },
    {
      icon: '',
      label: 'Méritos',
      value: 'meritos',
      selected: false,
    },
    {
      icon: '',
      label: 'Advertências',
      value: 'advertencias',
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
      label: 'Histórico',
      value: 'historico',
      selected: false,
    },
    {
      icon: '',
      label: 'Documentos',
      value: 'listar-documentos',
      selected: false,
    },
    {
      icon: '',
      label: 'Dados Pessoais',
      value: 'dados-pessoais',
      selected: false,
    },

  ];

  opcaoTabSelecionada = '';

  form = new FormGroup({
    buscarTurma: new FormControl('', Validators.required),
  });

  constructor(
    private readonly alunosService: AlunosService,
    private readonly toast: ToastService,
    private readonly modalService: ModalService
  ) {
    this.alunosService.steps.subscribe((value) => {
      this.idAluno = value.idAluno;
    });
  }
  ngOnInit(): void {
    this.buscarAlunoPorId();
  }

  buscarAlunoPorId() {
    this.alunosService.buscarAlunoPorId(this.idAluno).subscribe({
      next: value => {
        this.aluno = value
      },
      error: error => {
        this.toast.notify({
          message: 'Erro ao cadastrar aluno. Tente novamente mais tarde !',
          type: 'ERROR',
        });
      }
    })
  }

  chosenTab(tab: string) {
    this.opcaoTabSelecionada = tab;
  }

  excluirAluno() {
    this.isDetail = false;
    this.modalService.open(ExcluirAlunoComponent);
  }



  showHideDetail() {
    this.isDetail = !this.isDetail;
  }

  informacoesAluno() {
    this.isDetail = false;
    this.modalService.open(InformacoesAlunoComponent);
  }

  editarAluno() {
    this.alunosService.steps.next({ component: 'editar-aluno', idAluno: '' });
  }

  back() {
    this.alunosService.steps.next({ component: 'listar-alunos', idAluno: '' });
  }
}
