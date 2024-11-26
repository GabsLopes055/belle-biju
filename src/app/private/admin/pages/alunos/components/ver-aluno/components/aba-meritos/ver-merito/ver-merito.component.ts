import { Component } from '@angular/core';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { ModalComponent } from "../../../../../../../../../shared/modal/modal.component";
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";
import { EditarMeritoComponent } from '../editar-merito/editar-merito.component';

@Component({
  selector: 'app-ver-merito',
  standalone: true,
  imports: [ModalComponent, ButtonComponent],
  templateUrl: './ver-merito.component.html',
  styleUrl: './ver-merito.component.scss'
})
export class VerMeritoComponent {
  constructor(
    private readonly modalService: ModalService
  ){}

  editarNota() {
    this.modalService.open(EditarMeritoComponent)
  }

  fechar() {
    this.modalService.close();
  }
}
