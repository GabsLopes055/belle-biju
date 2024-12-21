import { Component } from '@angular/core';
import { ModalComponent } from '../../../modal/modal.component';
import { DividerComponent } from '../../../divider/divider.component';
import { InputIconComponent } from '../../../input-icon/input-icon.component';
import { ButtonComponent } from '../../../button/button.component';
import { SelectComponent } from '../../../select/select.component';
import { ModalService } from '../../../modal/modal.service';
import { RealizarChamadaComponent } from '../../../../private/admin/pages/turmas/components/visualizar-turma/components/aba-frequencia/realizar-chamada/realizar-chamada.component';

@Component({
  selector: 'app-abrir-modal-chamada',
  standalone: true,
  imports: [
    ModalComponent,
    DividerComponent,
    InputIconComponent,
    ButtonComponent,
    SelectComponent,
  ],
  templateUrl: './abrir-modal-chamada.component.html',
  styleUrl: './abrir-modal-chamada.component.scss',
})
export class AbrirModalChamadaComponent {

  constructor(
    private readonly modalService: ModalService
  ){}

  abrirChamada() {
    this.modalService.open(RealizarChamadaComponent)
  }
}
