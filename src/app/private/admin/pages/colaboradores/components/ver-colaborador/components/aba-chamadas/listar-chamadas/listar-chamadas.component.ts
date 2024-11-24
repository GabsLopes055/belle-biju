import { Component } from '@angular/core';
import { InputIconComponent } from "../../../../../../../../../shared/input-icon/input-icon.component";
import { ListComponent } from "../../../../../../../../../shared/list/list.component";
import { HeaderListComponent } from "../../../../../../../../../shared/list/components/header-list/header-list.component";
import { HeaderColComponent } from "../../../../../../../../../shared/list/components/header-col/header-col.component";
import { ItemListComponent } from "../../../../../../../../../shared/list/components/item-list/item-list.component";
import { ItemDataComponent } from "../../../../../../../../../shared/list/components/item-data/item-data.component";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { turma } from '../../../../../../../../../models/turma.interface';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { VerChamadaComponent } from '../../../../../../turmas/components/visualizar-turma/components/aba-chamada/ver-chamada/ver-chamada.component';

@Component({
  selector: 'listar-chamadas',
  standalone: true,
  imports: [InputIconComponent, ListComponent, HeaderListComponent, HeaderColComponent, ItemListComponent, ItemDataComponent],
  templateUrl: './listar-chamadas.component.html',
  styleUrl: './listar-chamadas.component.scss'
})
export class ListarChamadasComponent {

  data: turma[] = [
    { nome: '8° Ano - Turma A', periodo: 'Manhã' },
    { nome: '8° Ano - Turma B', periodo: 'Tarde' },
    { nome: '8° Ano - Turma C', periodo: 'Manhã' },
    { nome: '8° Ano - Turma D', periodo: 'Tarde' },
    { nome: '8° Ano - Turma E', periodo: 'Manhã' },
  ];

  form = new FormGroup({
    buscarTurma: new FormControl('', Validators.required),
  });

  constructor(
    private readonly modalService: ModalService
  ) {}


  verChamada() {
    this.modalService.open(VerChamadaComponent);
  }
}
