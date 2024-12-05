import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { TooltipDirective } from '../../../../../../shared/directives/tooltip.directive';
import { InputIconComponent } from '../../../../../../shared/input-icon/input-icon.component';
import { HeaderColComponent } from '../../../../../../shared/list/components/header-col/header-col.component';
import { HeaderListComponent } from '../../../../../../shared/list/components/header-list/header-list.component';
import { ItemDataComponent } from '../../../../../../shared/list/components/item-data/item-data.component';
import { ItemListComponent } from '../../../../../../shared/list/components/item-list/item-list.component';
import { ListComponent } from '../../../../../../shared/list/list.component';
import { ModalService } from '../../../../../../shared/modal/modal.service';
import { PaginatorComponent } from '../../../../../../shared/paginator/paginator.component';
import { Tab, TabsComponent } from '../../../../../../shared/tabs/tabs.component';
import { ListarAlunosComponent } from './components/aba-aluno/listar-alunos/listar-alunos.component';
import { TurmasService } from '../../turmas.service';
import { ListarProfessoresComponent } from './components/aba-professor/listar-professores/listar-professores.component';
import { InformacoesTurmaComponent } from './components/informacoes-turma/informacoes-turma.component';
import { DashboardComponent } from "./components/aba-dashboard/dashboard/dashboard.component";
import { NotasTurmasComponent } from "./components/aba-notas/notas-turmas/notas-turmas.component";
import { TurmasConteudosComponent } from "./components/aba-conteudo/turmas-conteudos/turmas-conteudos.component";
import { DadosTurmaComponent } from "./components/aba-dados-turma/dados-turma/dados-turma.component";
import { RealizarChamadaComponent } from './components/aba-frequencia/realizar-chamada/realizar-chamada.component';
import { ExcluirTurmaComponent } from './components/aba-frequencia/excluir-turma/excluir-turma.component';
import { ListarChamadasComponent } from './components/aba-frequencia/listar-chamadas/listar-chamadas.component';
import { ListarGradeCurricularComponent } from "./components/aba-grade-curricular/listar-grade-curricular/listar-grade-curricular.component";

@Component({
  selector: 'visualizar-turma',
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
    PaginatorComponent,
    TooltipDirective,
    ListarChamadasComponent,
    ListarAlunosComponent,
    ListarProfessoresComponent,
    DashboardComponent,
    NotasTurmasComponent,
    TurmasConteudosComponent,
    DadosTurmaComponent,
    ListarGradeCurricularComponent
],
  templateUrl: './visualizar-turma.component.html',
  styleUrl: './visualizar-turma.component.scss',
})
export class VisualizarTurmaComponent {
  isDetail: boolean = false;

  tabs: Tab[] = [
    {
      icon: '',
      label: 'Dashboard',
      value: 'turma-dashboard',
      selected: false,
    },
    {
      icon: '',
      label: 'Frequência',
      value: 'turma-frequencia',
      selected: false,
    },
    {
      icon: '',
      label: 'Grade Curricular',
      value: 'turma-grade-curricular',
      selected: false,
    },
    {
      icon: '',
      label: 'Notas',
      value: 'notas-turmas',
      selected: false,
    },
    {
      icon: '',
      label: 'Conteúdos',
      value: 'turmas-conteudos',
      selected: false,
    },
    {
      icon: '',
      label: 'Alunos',
      value: 'alunos',
      selected: false,
    },
    {
      icon: '',
      label: 'Professores',
      value: 'professores',
      selected: false,
    },
    {
      icon: '',
      label: 'Dados da turma',
      value: 'dados-turma',
      selected: false,
    },
  ];

  tamanhoPagina: number = 6; // total de itens por pagina
  totalItems!: number; // total de registros
  pagina: number = 1; // pagina atual
  opcaoTabSelecionada = '';

  form = new FormGroup({
    buscarTurma: new FormControl('', Validators.required),
  });

  constructor(
    private readonly turmaService: TurmasService,
    private readonly modalService: ModalService
  ) {}

  changePage($event: number) {
    //
  }

  editarTurma() {
    this.isDetail = false;
    this.turmaService.steps.next('editar-turma');
  }
  informacoesTurma() {
    this.isDetail = false;
    this.modalService.open(InformacoesTurmaComponent);
  }

  showHideDetail() {
    this.isDetail = !this.isDetail;
  }

  excluirTurma() {
    this.isDetail = false;
    this.modalService.open(ExcluirTurmaComponent);
    // console.log(this.opcaoTabSelecionada)
    // if(this.opcaoTabSelecionada === 'chamadas') {
    // }
    // if(this.opcaoTabSelecionada === 'alunos') {

    // }
    // if(this.opcaoTabSelecionada === 'professores') {

    // }
  }
  chosenTab(tab: string) {
    this.opcaoTabSelecionada = tab;
  }

  back() {
    this.turmaService.steps.next('listar-turmas');
  }


}
