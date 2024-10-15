import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { alunos } from '../../../../../../models/alunos.interface';
import { ButtonComponent } from "../../../../../../shared/button/button.component";
import { InputIconComponent } from "../../../../../../shared/input-icon/input-icon.component";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListComponent } from "../../../../../../shared/list/list.component";
import { HeaderListComponent } from "../../../../../../shared/list/components/header-list/header-list.component";
import { HeaderColComponent } from "../../../../../../shared/list/components/header-col/header-col.component";
import { ItemListComponent } from "../../../../../../shared/list/components/item-list/item-list.component";
import { ItemDataComponent } from "../../../../../../shared/list/components/item-data/item-data.component";
import { PaginatorComponent } from "../../../../../../shared/paginator/paginator.component";
import { AlunosService } from '../../alunos.service';

@Component({
  selector: 'listar-alunos',
  standalone: true,
  imports: [ButtonComponent, InputIconComponent, ListComponent, HeaderListComponent, HeaderColComponent, ItemListComponent, ItemDataComponent, PaginatorComponent],
  templateUrl: './listar-alunos.component.html',
  styleUrl: './listar-alunos.component.scss'
})
export class ListarAlunosComponent {

  form = new FormGroup({
    buscarAluno: new FormControl('', Validators.required),
  });

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
    },    {
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
  ];

  constructor(
    private readonly alunosService: AlunosService
  ){}

  cadastrarAluno() {
    this.alunosService.steps.next("cadastrar-aluno")
  }

  verAluno() {
    this.alunosService.steps.next("ver-aluno")
  }


}
