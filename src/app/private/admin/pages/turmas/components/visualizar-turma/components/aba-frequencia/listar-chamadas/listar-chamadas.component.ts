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
import { ButtonComponent } from '../../../../../../../../../shared/button/button.component';
import { RealizarChamadaComponent } from '../realizar-chamada/realizar-chamada.component';
import { ChipsComponent } from '../../../../../../../../../shared/chips/chips.component';

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
    ButtonComponent,
    ChipsComponent,
  ],
  templateUrl: './listar-chamadas.component.html',
  styleUrl: './listar-chamadas.component.scss',
})
export class ListarChamadasComponent {

  chipSelected: string = 'Língua Portuguesa';

  data: chamada[] = [
    {
      colaborador: 'Maria Silva',
      materia: 'Português',
      perfil: '10/10/2024',
    },
    {
      colaborador: 'João Santos',
      materia: 'Matemática',
      perfil: '10/10/2024',
    },
    {
      colaborador: 'Ana Oliveira',
      materia: 'Geografia',
      perfil: '10/10/2024',
    },
    { colaborador: 'Joana Silva', materia: 'História', perfil: '10/10/2024' },
    {
      colaborador: 'Maria Silva',
      materia: 'Português',
      perfil: '10/10/2024',
    },
    {
      colaborador: 'Marcelo Santos',
      materia: 'Química',
      perfil: '10/10/2024',
    },
    {
      colaborador: 'Nataly Oliveira',
      materia: 'Português',
      perfil: '10/10/2024',
    },
    {
      colaborador: 'Andrey Silva',
      materia: 'Biologia',
      perfil: '10/10/2024',
    },
    {
      colaborador: 'Maria Silva',
      materia: 'Educação Física',
      perfil: '10/10/2024',
    },
    {
      colaborador: 'Maria Silva',
      materia: 'Português',
      perfil: '10/10/2024',
    },
  ];

  constructor(private readonly modalService: ModalService) {}

  form = new FormGroup({
    buscarTurma: new FormControl('', Validators.required),
  });

  visualizarChamada() {
    this.modalService.open(VerChamadaComponent);
  }

  baixarChamada() {
    this.modalService.open(BaixarChamadaComponent);
  }

  eventChipSelected(event: string, materia: string) {
    if(event === materia) {
      this.chipSelected = event
    }
  }

  realizarChamada() {
    this.modalService.open(RealizarChamadaComponent);
  }
}
