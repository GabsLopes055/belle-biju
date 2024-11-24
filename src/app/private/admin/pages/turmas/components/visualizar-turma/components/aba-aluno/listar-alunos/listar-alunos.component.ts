import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../../../../../../shared/button/button.component';
import { InputIconComponent } from '../../../../../../../../../shared/input-icon/input-icon.component';
import { ListComponent } from '../../../../../../../../../shared/list/list.component';
import { HeaderListComponent } from '../../../../../../../../../shared/list/components/header-list/header-list.component';
import { HeaderColComponent } from '../../../../../../../../../shared/list/components/header-col/header-col.component';
import { ItemListComponent } from '../../../../../../../../../shared/list/components/item-list/item-list.component';
import { ItemDataComponent } from '../../../../../../../../../shared/list/components/item-data/item-data.component';
import { TooltipDirective } from '../../../../../../../../../shared/directives/tooltip.directive';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { RemoverAlunoComponent } from '../remover-aluno/remover-aluno.component';
import { VincularAlunoComponent } from '../vincular-aluno/vincular-aluno.component';
import { alunos } from '../../../../../../../../../models/alunos.interface';

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
    TooltipDirective,
  ],
  templateUrl: './listar-alunos.component.html',
  styleUrl: './listar-alunos.component.scss',
})
export class ListarAlunosComponent {

  alunos: alunos[] = [
    {
      nome: 'Lucas Costa',
      responsavel: 'Sergio Costa',
      email_responsavel: 'sergiocosta@gmail.com',
    },
    {
      nome: 'Juliana Oliveira',
      responsavel: 'Simone Oliveira',
      email_responsavel: 'simoneoliveira@gmail.com',
    },
    {
      nome: 'Rafael Santos',
      responsavel: 'Maria Santos',
      email_responsavel: 'mariasantos@gmail.com',
    },
    {
      nome: 'Lucas Costa',
      responsavel: 'Sergio Costa',
      email_responsavel: 'sergiocosta@gmail.com',
    },
    {
      nome: 'Rafael Santos',
      responsavel: 'Maria Santos',
      email_responsavel: 'mariasantos@gmail.com',
    },
    {
      nome: 'Lucas Costa',
      responsavel: 'Sergio Costa',
      email_responsavel: 'sergiocosta@gmail.com',
    },
    {
      nome: 'Rafael Santos',
      responsavel: 'Maria Santos',
      email_responsavel: 'mariasantos@gmail.com',
    },
    {
      nome: 'Lucas Costa',
      responsavel: 'Sergio Costa',
      email_responsavel: 'sergiocosta@gmail.com',
    },
  ];

  form = new FormGroup({
    buscarTurma: new FormControl('', Validators.required),
  });

  constructor(
    private readonly modalService: ModalService
  ) {}

  desvincularAluno() {
    this.modalService.open(RemoverAlunoComponent);
  }

  vincularAluno() {
    this.modalService.open(VincularAlunoComponent);
  }
}
