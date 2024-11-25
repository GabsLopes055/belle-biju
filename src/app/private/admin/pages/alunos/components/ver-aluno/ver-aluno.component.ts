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
import { LancarAdvertenciaComponent } from './components/lancar-advertencia/lancar-advertencia.component';
import { VerAdvertenciaComponent } from './components/ver-advertencia/ver-advertencia.component';
import { alunoResponse } from '../../../../../../models/alunos.interface';
import { ToastService } from '../../../../../../shared/toast/toast.service';

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
  ],
  templateUrl: './ver-aluno.component.html',
  styleUrl: './ver-aluno.component.scss',
})
export class VerAlunoComponent implements OnInit {
  isDetail = false;
  // @Input() idAluno!: string;
  idAluno: string = '';

  aluno!: alunoResponse;
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
    this.alunosService.steps.next({ component: 'editar-aluno', idAluno: '' });
  }

  back() {
    this.alunosService.steps.next({ component: 'listar-alunos', idAluno: '' });
  }
}
