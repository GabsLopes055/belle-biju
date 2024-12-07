import { Component } from '@angular/core';
import { InputIconComponent } from '../../../../../../../../../shared/input-icon/input-icon.component';
import { ListComponent } from '../../../../../../../../../shared/list/list.component';
import { HeaderListComponent } from '../../../../../../../../../shared/list/components/header-list/header-list.component';
import { HeaderColComponent } from '../../../../../../../../../shared/list/components/header-col/header-col.component';
import { ItemListComponent } from '../../../../../../../../../shared/list/components/item-list/item-list.component';
import { ItemDataComponent } from '../../../../../../../../../shared/list/components/item-data/item-data.component';
import { responseNotas } from '../../../../../../../../../models/notas.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { VerNotaComponent } from '../ver-nota/ver-nota.component';
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";
import { LancarNotaComponent } from '../lancar-nota/lancar-nota.component';
import { ChipsComponent } from "../../../../../../../../../shared/chips/chips.component";

@Component({
  selector: 'listar-notas',
  standalone: true,
  imports: [
    InputIconComponent,
    ListComponent,
    HeaderListComponent,
    HeaderColComponent,
    ItemListComponent,
    ItemDataComponent,
    ButtonComponent,
    ChipsComponent
],
  templateUrl: './listar-notas.component.html',
  styleUrl: './listar-notas.component.scss',
})
export class ListarNotasComponent {

  chipSelected: string = 'Todas';

  listaNotas: responseNotas[] = [
    {
      dataAvaliacao: "2024-11-20",
      observacao: "A avaliação foi focada em habilidades práticas.",
      nota: 8.5,
      tipoAvaliacao: "Prova Final",
      periodo: "2024-2",
      materia: "Matemática",
      id: "123456789",
      createdAt: "2024-11-20T08:30:00Z",
      updatedAt: "2024-11-20T08:30:00Z"
    },
    {
      dataAvaliacao: "2024-11-20",
      observacao: "A avaliação foi focada em habilidades práticas.",
      nota: 8.5,
      tipoAvaliacao: "Prova Final",
      periodo: "2024-2",
      materia: "Matemática",
      id: "123456789",
      createdAt: "2024-11-20T08:30:00Z",
      updatedAt: "2024-11-20T08:30:00Z"
    },
    {
      dataAvaliacao: "2024-11-20",
      observacao: "A avaliação foi focada em habilidades práticas.",
      nota: 8.5,
      tipoAvaliacao: "Prova Final",
      periodo: "2024-2",
      materia: "Matemática",
      id: "123456789",
      createdAt: "2024-11-20T08:30:00Z",
      updatedAt: "2024-11-20T08:30:00Z"
    }
  ]

  form = new FormGroup({
    buscarTurma: new FormControl('', Validators.required),
  });

  constructor(
    private readonly modalService: ModalService
  ){}

  eventChipSelected(event: string, materia: string) {
    if(event === materia) {
      this.chipSelected = event
    }
  }

  verNota() {
    this.modalService.open(VerNotaComponent);
  }

  lancarNota() {
    this.modalService.open(LancarNotaComponent);

  }

}
