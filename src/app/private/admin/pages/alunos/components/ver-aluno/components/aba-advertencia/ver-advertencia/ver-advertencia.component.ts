import { Component } from '@angular/core';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { ModalComponent } from "../../../../../../../../../shared/modal/modal.component";
import { DividerComponent } from "../../../../../../../../../shared/divider/divider.component";
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";
import { EditarAdvertenciaComponent } from '../editar-advertencia/editar-advertencia.component';

@Component({
  selector: 'app-ver-advertencia',
  standalone: true,
  imports: [ModalComponent, DividerComponent, ButtonComponent],
  templateUrl: './ver-advertencia.component.html',
  styleUrl: './ver-advertencia.component.scss'
})
export class VerAdvertenciaComponent {
  constructor(
    private readonly modalService: ModalService
  ){}

  editarNota() {
    this.modalService.open(EditarAdvertenciaComponent)
  }

  fechar() {
    this.modalService.close();
  }
}
