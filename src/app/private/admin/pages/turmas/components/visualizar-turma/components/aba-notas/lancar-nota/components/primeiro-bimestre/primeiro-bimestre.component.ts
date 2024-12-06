import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../../../../../../../../shared/button/button.component';
import { AlunosService } from '../../../../../../../../alunos/alunos.service';
import { ColumnRegular, RevoGrid } from '@revolist/angular-datagrid';

@Component({
  selector: 'primeiro-bimestre',
  standalone: true,
  imports: [ButtonComponent, RevoGrid],
  templateUrl: './primeiro-bimestre.component.html',
  styleUrl: './primeiro-bimestre.component.scss',
})
export class PrimeiroBimestreComponent {

  // É possivel também criar conteudo dentro de cada colum
  // columnTemplate - Ver depois para criar os botoes de excluir coluna

  source: any = [];
  columns: ColumnRegular[] = [
    { prop: 'aluno', name: 'Aluno', size: 400, readonly: true},
    { prop: 'primeiraAvaliacao', name: 'Prova', size: 600, editable: true },
    { prop: 'media', name: 'Média', size: 300, editable: true },
  ];

  constructor(private readonly alunosService: AlunosService) {}

  ngOnInit(): void {
    this.alunosService.listarAlunos({ page: 1, limit: 100 }).subscribe({
      next: (alunos) => {
        // Inicializa o array vazio antes de preencher
        this.source = [];
        alunos.data.forEach((aluno) => {
          this.source.push({
            aluno: aluno.nome,
            primeiraAvaliacao: '0,0',
            media: '0,0',
          });
        });
      },
    });
  }

  adicionarAvaliacao() {
    this.columns.push({
      prop: 'prova1',
      name: 'Prova2',
      editable: true,
      resize: true,
      size: 500,
    });
  }
}
