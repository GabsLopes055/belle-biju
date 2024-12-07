import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ColumnRegular, RevoGrid } from '@revolist/angular-datagrid';
import { ButtonComponent } from '../../../../../../../../../../../shared/button/button.component';
import { AlunosService } from '../../../../../../../../alunos/alunos.service';

@Component({
  selector: 'primeiro-bimestre',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [ButtonComponent, RevoGrid],
  templateUrl: './primeiro-bimestre.component.html',
  styleUrl: './primeiro-bimestre.component.scss',
})
export class PrimeiroBimestreComponent {
  // É possivel também criar conteudo dentro de cada colum
  // columnTemplate - Ver depois para criar os botoes de excluir coluna

  source: any = [];
  columns: ColumnRegular[] = [
    { prop: 'aluno', name: 'Aluno', size: 550, readonly: true },
    { prop: 'primeiraAvaliacao', name: 'Prova', size: 600, editable: true },
    { prop: 'media', name: 'Média', size: 560, editable: true },
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
      resize: true,
      size: 500,
    };

    // Calcula o índice da penúltima posição
    const penultimaPosicao = Math.max(0, this.columns.length - 1);

    // Cria uma nova cópia do array de colunas com a nova coluna na posição correta
    this.columns = [
      ...this.columns.slice(0, penultimaPosicao), // Colunas antes da penúltima
      novaColuna, // Nova coluna
      ...this.columns.slice(penultimaPosicao), // Colunas depois
    ];
    this.ajustarLarguras()
    // Atualiza os dados do source para incluir a nova propriedade
    // this.source = this.source.map(row => ({
    //   ...row,
    //   [novaColuna.prop]: null, // Adiciona a nova propriedade com valor padrão
    // }));
  }


}
