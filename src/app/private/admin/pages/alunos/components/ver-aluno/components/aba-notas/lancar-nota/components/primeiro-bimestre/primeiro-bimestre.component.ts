import { Component, Input, signal } from '@angular/core';
import { ButtonComponent } from "../../../../../../../../../../../shared/button/button.component";
import { ColumnRegular, RevoGrid } from '@revolist/angular-datagrid';
import { AlunosService } from '../../../../../../../alunos.service';
import { alunoResponse } from '../../../../../../../../../../../models/alunos.interface';

@Component({
  selector: 'primeiro-bimestre',
  standalone: true,
  imports: [ButtonComponent, RevoGrid],
  templateUrl: './primeiro-bimestre.component.html',
  styleUrl: './primeiro-bimestre.component.scss'
})
export class PrimeiroBimestreComponent {

  @Input() idAluno!: string;
  aluno!: alunoResponse;

  // É possivel também criar conteudo dentro de cada colum
  // columnTemplate - Ver depois para criar os botoes de excluir coluna

  source: any = [];
  columns: ColumnRegular[] = [
    { prop: 'aluno', name: 'Aluno', readonly: true, size: 500 },
    { prop: 'primeiraAvaliacao', name: 'Prova', editable: true, size: 300 },
    { prop: 'media', name: 'Média', editable: true, size: 700 },
  ];

  constructor(private readonly alunosService: AlunosService) {

    this.alunosService.steps.subscribe({
      next: value => {
        this.idAluno = value.idAluno;
      }
    })
  }

  ngOnInit(): void {
    this.alunosService.buscarAlunoPorId(this.idAluno).subscribe({
      next: (alunos) => {
        // Inicializa o array vazio antes de preencher
        this.source = [];
        // alunos.forEach((aluno) => {
          this.source.push({
            aluno: alunos.nome,
            primeiraAvaliacao: '0,0',
            media: '0,0',
          });
        // });
      },
    });
  }

  ajustarLarguras() {
  // Largura total desejada da tabela
  const larguraTotal = 1700; // ou use `window.innerWidth` para largura dinâmica

  // Calcula a nova largura para cada coluna
  const larguraPorColuna = larguraTotal / this.columns.length;

  // Atualiza a largura de cada coluna
  this.columns = this.columns.map(column => ({
    ...column,
    size: larguraPorColuna,
  }));
  }

  adicionarAvaliacao() {
    const novaColuna = {
      prop: 'prova',
      name: 'Prova',
      editable: true,
      size: 300
    };

    // Calcula o índice da penúltima posição
    const penultimaPosicao = Math.max(0, this.columns.length - 1);

    // Cria uma nova cópia do array de colunas com a nova coluna na posição correta
    this.columns = [
      ...this.columns.slice(0, penultimaPosicao), // Colunas antes da penúltima
      novaColuna, // Nova coluna
      ...this.columns.slice(penultimaPosicao), // Colunas depois
    ];
    // this.ajustarLarguras()
    // Atualiza os dados do source para incluir a nova propriedade
    // this.source = this.source.map(row => ({
    //   ...row,
    //   [novaColuna.prop]: null, // Adiciona a nova propriedade com valor padrão
    // }));
  }
}
