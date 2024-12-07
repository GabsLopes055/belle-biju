import { Component } from '@angular/core';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { ButtonComponent } from '../../../../../../../../../shared/button/button.component';
import { ModalComponent } from '../../../../../../../../../shared/modal/modal.component';
import { ListComponent } from '../../../../../../../../../shared/list/list.component';
import { HeaderListComponent } from '../../../../../../../../../shared/list/components/header-list/header-list.component';
import { ItemListComponent } from '../../../../../../../../../shared/list/components/item-list/item-list.component';
import { HeaderColComponent } from '../../../../../../../../../shared/list/components/header-col/header-col.component';
import { ItemDataComponent } from '../../../../../../../../../shared/list/components/item-data/item-data.component';
import { TableComponent } from '../../../../../../../../../shared/table/table.component';
import { HeaderTableDataComponent } from "../../../../../../../../../shared/table/components/header-table-data/header-table-data.component";
import { HeaderTableComponent } from "../../../../../../../../../shared/table/components/header-table/header-table.component";
import { ItemTableComponent } from "../../../../../../../../../shared/table/components/item-table/item-table.component";
import { TableDataComponent } from "../../../../../../../../../shared/table/components/table-data/table-data.component";

@Component({
  selector: 'chamada-geral-aluno',
  standalone: true,
  imports: [
    ButtonComponent,
    ModalComponent,
    ListComponent,
    HeaderListComponent,
    ItemListComponent,
    HeaderColComponent,
    ItemDataComponent,
    TableComponent,
    HeaderTableDataComponent,
    HeaderTableComponent,
    ItemTableComponent,
    TableDataComponent
],
  templateUrl: './chamada-geral.component.html',
  styleUrl: './chamada-geral.component.scss',
})
export class ChamadaGeralAlunoComponent {
  editar: boolean = false;
  headers: string[] = [
    '',
    '1º Bimestre ',
    '2º Bimestre ',
    '3º Bimestre ',
    '4º Bimestre ',
  ];

  constructor(private readonly modalService: ModalService) {}

  finalizarChamada() {
    this.modalService.close();
  }
}
