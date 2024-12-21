import { Component } from '@angular/core';

import { EditarEventoComponent } from '../editar-evento/editar-evento.component';
import { ModalComponent } from '../../../../../../../shared/modal/modal.component';
import { ButtonComponent } from '../../../../../../../shared/button/button.component';
import { ModalService } from '../../../../../../../shared/modal/modal.service';

@Component({
  selector: 'app-ver-evento',
  standalone: true,
  imports: [ModalComponent, ButtonComponent],
  templateUrl: './ver-evento.component.html',
  styleUrl: './ver-evento.component.scss'
})
export class VerEventoComponent {
  constructor(
    private readonly modalService: ModalService
  ){}

  editarConteudo() {
    this.modalService.open(EditarEventoComponent)
  }

  fechar() {
    this.modalService.close();
  }
}
