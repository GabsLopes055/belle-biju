import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../../../../../../shared/button/button.component';
import { InputIconComponent } from '../../../../../../../../../shared/input-icon/input-icon.component';
import { ListComponent } from '../../../../../../../../../shared/list/list.component';
import { HeaderListComponent } from '../../../../../../../../../shared/list/components/header-list/header-list.component';
import { HeaderColComponent } from '../../../../../../../../../shared/list/components/header-col/header-col.component';
import { ItemListComponent } from '../../../../../../../../../shared/list/components/item-list/item-list.component';
import { ItemDataComponent } from '../../../../../../../../../shared/list/components/item-data/item-data.component';
import { professores } from '../../../../../../../../../models/professores.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TooltipDirective } from '../../../../../../../../../shared/directives/tooltip.directive';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { VincularProfessorComponent } from '../vincular-professor/vincular-professor.component';
import { RemoverProfessorComponent } from '../remover-professor/remover-professor.component';

@Component({
  selector: 'listar-professores',
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
  templateUrl: './listar-professores.component.html',
  styleUrl: './listar-professores.component.scss',
})
export class ListarProfessoresComponent {
  professores: professores[] = [
    {
      nome: 'Maria Silva',
      email: 'mariasilva@ayrtonsenna.gov',
      materia: 'Português',
      perfil: 'Professor'
    },
    {
      nome: 'João Santos',
      email: 'joaosantos@ayrtonsenna.gov',
      materia: 'Matemática',
      perfil: 'Professor'
    },
    {
      nome: 'Ana Oliveira',
      email: 'anaoliveira@ayrtonsenna.gov',
      materia: 'História',
      perfil: 'Professor'
    },
    {
      nome: 'Maria Silva',
      email: 'mariasilva@ayrtonsenna.gov',
      materia: 'Português',
      perfil: 'Professor'
    },
    {
      nome: 'João Santos',
      email: 'joaosantos@ayrtonsenna.gov',
      materia: 'Matemática',
      perfil: 'Professor'
    },
    {
      nome: 'Ana Oliveira',
      email: 'anaoliveira@ayrtonsenna.gov',
      materia: 'História',
      perfil: 'Professor'
    },
  ];


  form = new FormGroup({
    buscarTurma: new FormControl('', Validators.required),
  });

  constructor(
    private readonly modalService: ModalService
  ) {}

  vincularProfessor() {
    this.modalService.open(VincularProfessorComponent);
  }

  desvincularProfessor() {
    this.modalService.open(RemoverProfessorComponent);
  }

}
