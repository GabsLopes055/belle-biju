import { Component, OnInit } from '@angular/core';
import { ModalComponent } from "../../../../../../../../../shared/modal/modal.component";
import { DividerComponent } from "../../../../../../../../../shared/divider/divider.component";
import { InputIconComponent } from "../../../../../../../../../shared/input-icon/input-icon.component";
import { CheckboxComponent } from "../../../../../../../../../shared/checkbox/checkbox.component";
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { AlunosService } from '../../../../../../alunos/alunos.service';
import { alunoResponse, listaAlunosResponse } from '../../../../../../../../../models/alunos.interface';
import { filtroDeBusca } from '../../../../../../../../../models/filtro-busca.interface';

@Component({
  selector: 'app-vincular-aluno',
  standalone: true,
  imports: [ModalComponent, DividerComponent, InputIconComponent, CheckboxComponent, ButtonComponent],
  templateUrl: './vincular-aluno.component.html',
  styleUrl: './vincular-aluno.component.scss'
})
export class VincularAlunoComponent implements OnInit {
  filtroBuscarAlunos: filtroDeBusca = {
    limit: 100,
    page: 1
  }
  alunos: alunoResponse[] = [];

  constructor(
    private readonly modalService: ModalService,
    private readonly alunosService: AlunosService
  ){}

  ngOnInit(): void {
    this.buscarTodosAlunos();
  }

  buscarTodosAlunos() {
    this.alunosService.listarAlunos(this.filtroBuscarAlunos).subscribe({
      next: (alunos) => {
        this.alunos = alunos.data
      },
      error: (err) => {

      },
    })
  }

  vincular() {
    this.modalService.close();
  }

}
