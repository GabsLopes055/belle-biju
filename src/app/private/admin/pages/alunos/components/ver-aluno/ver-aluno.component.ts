import { Component } from '@angular/core';
import {
  Tab,
  TabsComponent,
} from '../../../../../../shared/tabs/tabs.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlunosService } from '../../alunos.service';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { InputIconComponent } from '../../../../../../shared/input-icon/input-icon.component';
import { ListComponent } from '../../../../../../shared/list/list.component';
import { HeaderListComponent } from '../../../../../../shared/list/components/header-list/header-list.component';
import { HeaderColComponent } from '../../../../../../shared/list/components/header-col/header-col.component';
import { ItemListComponent } from '../../../../../../shared/list/components/item-list/item-list.component';
import { ItemDataComponent } from '../../../../../../shared/list/components/item-data/item-data.component';
import { advertencias } from '../../../../../../models/advertencias.interface';
import { chamada } from '../../../../../../models/chamada.interface';
import { ModalService } from '../../../../../../shared/modal/modal.service';
import { ExcluirAlunoComponent } from './components/excluir-aluno/excluir-aluno.component';
import { VerFrequenciaComponent } from './components/ver-frequencia/ver-frequencia.component';
import { VerAdvertenciaComponent } from './components/ver-advertencia/ver-advertencia.component';
import { LancarAdvertenciaComponent } from './components/lancar-advertencia/lancar-advertencia.component';
import { InformacoesAlunoComponent } from './components/informacoes-aluno/informacoes-aluno.component';

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
  ],
  templateUrl: './ver-aluno.component.html',
  styleUrl: './ver-aluno.component.scss',
})
export class VerAlunoComponent {

  isDetail = false;
  chamadas: chamada[] = [
    {
      colaborador: 'Maria Silva',
      materia: 'Português',
      data: '29/04/2024 10:30',
    },
    {
      colaborador: 'João Santos',
      materia: 'Matemática',
      data: '29/04/2024 10:30',
    },
    {
      colaborador: 'Ana Oliveira',
      materia: 'Geografia',
      data: '29/04/2024 10:30',
    },
    {
      colaborador: 'Joana Silva',
      materia: 'História',
      data: '29/04/2024 10:30',
    },
    {
      colaborador: 'Maria Silva',
      materia: 'Português',
      data: '29/04/2024 10:30',
    },
    {
      colaborador: 'Marcelo Santos',
      materia: 'Química',
      data: '29/04/2024 10:30',
    }
  ];

  advertencias: advertencias[] = [
    {
      assunto: 'Frequência',
      colaborador: 'Nome colaborador',
      descricao:
        'O aluno tem faltado muito, o que pode afetar o desempenho dele...',
      data: '29/04/2024 10:30',
    },
    {
      assunto: 'Frequência',
      colaborador: 'Nome colaborador',
      descricao:
        'O aluno tem faltado muito, o que pode afetar o desempenho dele...',
      data: '29/04/2024 10:30',
    },
  ];

  tabs: Tab[] = [
    {
      icon: '',
      label: 'Frequência',
      value: 'frequencia',
      selected: false,
    },
    // {
    //   icon: '',
    //   label: 'Advertências',
    //   value: 'advertencias',
    //   selected: false,
    // },
  ];

  opcaoTabSelecionada = '';

  form = new FormGroup({
    buscarTurma: new FormControl('', Validators.required),
  });

  constructor(
    private readonly alunosService: AlunosService,
    private readonly modalService: ModalService
  ) {}

  chosenTab(tab: string) {
    this.opcaoTabSelecionada = tab;
  }

  excluirAluno() {
    this.isDetail = false;
    this.modalService.open(ExcluirAlunoComponent);
  }
  verFrequencia() {
    this.modalService.open(VerFrequenciaComponent);
  }
  verAdvertencia() {
    this.modalService.open(VerAdvertenciaComponent);
  }
  lancarAdvertencia() {
    this.modalService.open(LancarAdvertenciaComponent);
  }

  showHideDetail() {
    this.isDetail = !this.isDetail;
  }

  informacoesAluno() {
    this.isDetail = false;
    this.modalService.open(InformacoesAlunoComponent);
  }

  editarAluno() {
    this.alunosService.steps.next('editar-aluno');
  }

  back() {
    this.alunosService.steps.next('listar-alunos');
  }
}
