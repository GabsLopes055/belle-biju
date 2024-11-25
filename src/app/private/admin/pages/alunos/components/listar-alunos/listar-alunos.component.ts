import {
  alunoResponse,
  listaAlunosResponse,
} from './../../../../../../models/alunos.interface';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { alunos } from '../../../../../../models/alunos.interface';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { InputIconComponent } from '../../../../../../shared/input-icon/input-icon.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListComponent } from '../../../../../../shared/list/list.component';
import { HeaderListComponent } from '../../../../../../shared/list/components/header-list/header-list.component';
import { HeaderColComponent } from '../../../../../../shared/list/components/header-col/header-col.component';
import { ItemListComponent } from '../../../../../../shared/list/components/item-list/item-list.component';
import { ItemDataComponent } from '../../../../../../shared/list/components/item-data/item-data.component';
import { PaginatorComponent } from '../../../../../../shared/paginator/paginator.component';
import { AlunosService } from '../../alunos.service';
import { HttpClient } from '@angular/common/http';
import { filtroDeBusca } from '../../../../../../models/filtro-busca.interface';
import { ToastService } from '../../../../../../shared/toast/toast.service';

interface Aluno {
  nome: string;
  turma: string;
  fotoUrl: string; // Supondo que o endpoint devolva a URL da foto
  responsavel: string;
  email: string;
}

@Component({
  selector: 'listar-alunos',
  standalone: true,
  imports: [
    ButtonComponent,
    InputIconComponent,
    ListComponent,
    HeaderListComponent,
    HeaderColComponent,
    ItemListComponent,
    ItemDataComponent,
    PaginatorComponent,
  ],
  templateUrl: './listar-alunos.component.html',
  styleUrl: './listar-alunos.component.scss',
})
export class ListarAlunosComponent implements OnInit {
  page: number = 1;
  limit: number = 20;
  alunos: alunoResponse[] = [];
  serverUrl: string = 'https://escola-ai-backend.technolimit.com.br';

  filtroBusca: filtroDeBusca = {
    page: this.page,
    limit: this.limit,
  };
  form = new FormGroup({
    buscarAluno: new FormControl('', Validators.required),
  });

  constructor(
    private readonly alunosService: AlunosService,
    private readonly toast: ToastService
  ) {}

  ngOnInit() {
    this.listarAlunos();
  }

  cadastrarAluno() {
    this.alunosService.steps.next({component: 'cadastrar-aluno', idAluno: ''});
  }

  listarAlunos() {
    this.alunosService.listarAlunos(this.filtroBusca).subscribe({
      next: (value) => {
        this.alunos = value.data;
      },
      error: (err) => {
        this.toast.notify({
          message: 'Erro ao listar alunos.',
          type: 'ERROR',
        });
      },
    });
  }

  verAluno(idAluno: string) {
    this.alunosService.steps.next({component: 'ver-aluno', idAluno: idAluno});
  }

  // // Função para buscar a lista de presença do endpoint
  // getAlunos(): void {
  //   this.http.get<Aluno[]>(`${this.serverUrl}/alunos`).subscribe(
  //     (data) => {
  //       this.alunos = data;
  //     },
  //     (error) => {
  //       console.error('Erro ao atualizar a lista de presença:', error);
  //     }
  //   );
  // }

  changePage(event: any) {
    this.page = event;
  }
}
