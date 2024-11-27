import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../../../../../shared/button/button.component';
import { AlunosService } from '../../../../alunos.service';
import { aluno } from '../../../../alunos.component';
import { alunoResponse } from '../../../../../../../../models/alunos.interface';

@Component({
  selector: 'dados-pessoais',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './aba-dados-pessoais.component.html',
  styleUrl: './aba-dados-pessoais.component.scss',
})
export class AbaDadosPessoaisComponent {
  aluno!: alunoResponse;
  idAluno: string = '';

  constructor(private readonly alunosService: AlunosService) {
    this.alunosService.steps.subscribe((value) => {
      if (value.idAluno != null) {
        this.idAluno = value.idAluno;
      }
    });
    this.buscarAlunoPorId();
  }

  buscarAlunoPorId() {
    this.alunosService.buscarAlunoPorId(this.idAluno).subscribe({
      next: (value) => {
        this.aluno = value;
      },
    });
  }

  editar() {
    this.alunosService.steps.next({component: 'editar-aluno', idAluno: this.idAluno});
  }
}
