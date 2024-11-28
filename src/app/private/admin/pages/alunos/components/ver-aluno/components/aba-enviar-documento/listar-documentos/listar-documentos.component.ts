import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { InputIconComponent } from "../../../../../../../../../shared/input-icon/input-icon.component";
import { ListComponent } from "../../../../../../../../../shared/list/list.component";
import { HeaderListComponent } from "../../../../../../../../../shared/list/components/header-list/header-list.component";
import { HeaderColComponent } from "../../../../../../../../../shared/list/components/header-col/header-col.component";
import { ItemListComponent } from "../../../../../../../../../shared/list/components/item-list/item-list.component";
import { ItemDataComponent } from "../../../../../../../../../shared/list/components/item-data/item-data.component";
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";
import { LancarDocumentoComponent } from '../lancar-documento/lancar-documento.component';

@Component({
  selector: 'listar-documentos',
  standalone: true,
  imports: [InputIconComponent, ListComponent, HeaderListComponent, HeaderColComponent, ItemListComponent, ItemDataComponent, ButtonComponent],
  templateUrl: './listar-documentos.component.html',
  styleUrl: './listar-documentos.component.scss'
})
export class ListarDocumentosComponent {
  form = new FormGroup({
    buscarTurma: new FormControl('', Validators.required),
  });

  constructor(private readonly modalService: ModalService) {}

  verHistorico() {
  }

  lancarDocumento(){
    this.modalService.open(LancarDocumentoComponent)
  }
}
