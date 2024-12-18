import { Component } from '@angular/core';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputIconComponent } from "../../../../../../../../../shared/input-icon/input-icon.component";
import { ListComponent } from "../../../../../../../../../shared/list/list.component";
import { HeaderListComponent } from "../../../../../../../../../shared/list/components/header-list/header-list.component";
import { HeaderColComponent } from "../../../../../../../../../shared/list/components/header-col/header-col.component";
import { ItemDataComponent } from "../../../../../../../../../shared/list/components/item-data/item-data.component";
import { ItemListComponent } from "../../../../../../../../../shared/list/components/item-list/item-list.component";
import { historico } from '../../../../../../../../../models/historico.interface';
import { VerHistoricoComponent } from '../ver-historico/ver-historico.component';
import {GridEditableComponent} from "../../../../../../../../../shared/grid-editable/grid-editable.component";
import {CalendarComponent} from "../../../../../../../../../shared/calendar/calendar.component";
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";
import { CadastrarHistoricoComponent } from '../cadastrar-historico/cadastrar-historico.component';

@Component({
  selector: 'listar-historico',
  standalone: true,
  imports: [InputIconComponent, ListComponent, HeaderListComponent, HeaderColComponent, ItemDataComponent, ItemListComponent, GridEditableComponent, CalendarComponent, ButtonComponent],
  templateUrl: './listar-historico.component.html',
  styleUrl: './listar-historico.component.scss'
})
export class ListarHistoricoComponent {

  historico: historico[] = [
    {
      escola_origem: "Colégio Educacional Santo André",
      data_transferencia: "20/10/2024",
      motivo: "Mudança de endereço para outro bairro"
    },
    {
      escola_origem: "Colégio Educacional Santo André",
      data_transferencia: "20/10/2024",
      motivo: "Mudança de endereço para outro bairro"
    },
    {
      escola_origem: "Colégio Educacional Santo André",
      data_transferencia: "20/10/2024",
      motivo: "Mudança de endereço para outro bairro"
    }
  ]

  form = new FormGroup({
    buscarTurma: new FormControl('', Validators.required),
  });

  constructor(private readonly modalService: ModalService) {}

  verHistorico() {
    this.modalService.open(VerHistoricoComponent)
  }

  cadastrarHistorico() {
    this.modalService.open(CadastrarHistoricoComponent)

  }
}
