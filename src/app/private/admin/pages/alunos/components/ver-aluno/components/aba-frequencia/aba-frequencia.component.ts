import { Component } from '@angular/core';
import { InputIconComponent } from '../../../../../../../../shared/input-icon/input-icon.component';
import { ListComponent } from '../../../../../../../../shared/list/list.component';
import { HeaderListComponent } from '../../../../../../../../shared/list/components/header-list/header-list.component';
import { HeaderColComponent } from '../../../../../../../../shared/list/components/header-col/header-col.component';
import { ItemListComponent } from '../../../../../../../../shared/list/components/item-list/item-list.component';
import { ItemDataComponent } from '../../../../../../../../shared/list/components/item-data/item-data.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../../../../../../shared/modal/modal.service';
import { chamada } from '../../../../../../../../models/chamada.interface';
import { VerFrequenciaComponent } from './ver-frequencia/ver-frequencia.component';

@Component({
  selector: 'aba-frequencia',
  standalone: true,
  imports: [
    InputIconComponent,
    ListComponent,
    HeaderListComponent,
    HeaderColComponent,
    ItemListComponent,
    ItemDataComponent,
  ],
  templateUrl: './aba-frequencia.component.html',
  styleUrl: './aba-frequencia.component.scss',
})
export class AbaFrequenciaComponent {

  form = new FormGroup({
    buscarTurma: new FormControl('', Validators.required),
  });

  chamadas: chamada[] = [
    {
      colaborador: 'Maria Silva',
      materia: 'Português',
      data: '29/04/2024 10:30',
    },
    {
      colaborador: 'João Santos',
      materia: 'Matemática',
      data: '29/04/2024 10:30',
    },
    {
      colaborador: 'Ana Oliveira',
      materia: 'Geografia',
      data: '29/04/2024 10:30',
    },
    {
      colaborador: 'Joana Silva',
      materia: 'História',
      data: '29/04/2024 10:30',
    },
    {
      colaborador: 'Maria Silva',
      materia: 'Português',
      data: '29/04/2024 10:30',
    },
    {
      colaborador: 'Marcelo Santos',
      materia: 'Química',
      data: '29/04/2024 10:30',
    },
  ];

  constructor(private readonly modalService: ModalService) {}

  verFrequencia() {
    this.modalService.open(VerFrequenciaComponent);
  }
}
