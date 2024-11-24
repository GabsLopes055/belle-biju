import { Component } from '@angular/core';
import { InputIconComponent } from '../../../../../../../../../shared/input-icon/input-icon.component';
import { ListComponent } from '../../../../../../../../../shared/list/list.component';
import { HeaderListComponent } from '../../../../../../../../../shared/list/components/header-list/header-list.component';
import { HeaderColComponent } from '../../../../../../../../../shared/list/components/header-col/header-col.component';
import { ItemListComponent } from '../../../../../../../../../shared/list/components/item-list/item-list.component';
import { ItemDataComponent } from '../../../../../../../../../shared/list/components/item-data/item-data.component';
import { chamada } from '../../../../../../../../../models/chamada.interface';
import { TooltipDirective } from '../../../../../../../../../shared/directives/tooltip.directive';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { VerChamadaComponent } from '../ver-chamada/ver-chamada.component';
import { BaixarChamadaComponent } from '../baixar-chamada/baixar-chamada.component';

@Component({
  selector: 'listar-chamadas',
  standalone: true,
  imports: [
    InputIconComponent,
    ListComponent,
    HeaderListComponent,
    HeaderColComponent,
    ItemListComponent,
    ItemDataComponent,
    TooltipDirective,
  ],
  templateUrl: './listar-chamadas.component.html',
  styleUrl: './listar-chamadas.component.scss',
})
export class ListarChamadasComponent {
  data: chamada[] = [
    {
      colaborador: 'Maria Silva',
      materia: 'Português',
      perfil: 'Professor(a)',
    },
    {
      colaborador: 'João Santos',
      materia: 'Matemática',
      perfil: 'Professor(a)',
    },
    {
      colaborador: 'Ana Oliveira',
      materia: 'Geografia',
      perfil: 'Professor(a)',
    },
    { colaborador: 'Joana Silva', materia: 'História', perfil: 'Professor(a)' },
    {
      colaborador: 'Maria Silva',
      materia: 'Português',
      perfil: 'Professor(a)',
    },
    {
      colaborador: 'Marcelo Santos',
      materia: 'Química',
      perfil: 'Professor(a)',
    },
    {
      colaborador: 'Nataly Oliveira',
      materia: 'Português',
      perfil: 'Professor(a)',
    },
    {
      colaborador: 'Andrey Silva',
      materia: 'Biologia',
      perfil: 'Professor(a)',
    },
    {
      colaborador: 'Maria Silva',
      materia: 'Educação Física',
      perfil: 'Professor(a)',
    },
    {
      colaborador: 'Maria Silva',
      materia: 'Português',
      perfil: 'Professor(a)',
    },
  ];

  constructor(
    private readonly modalService: ModalService
  ) {}

  form = new FormGroup({
    buscarTurma: new FormControl('', Validators.required),
  });

  visualizarChamada() {
    this.modalService.open(VerChamadaComponent);
  }

  baixarChamada() {
    this.modalService.open(BaixarChamadaComponent);
  }
}
