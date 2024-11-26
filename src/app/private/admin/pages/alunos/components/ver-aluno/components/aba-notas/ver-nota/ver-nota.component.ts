import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { ModalComponent } from "../../../../../../../../../shared/modal/modal.component";
import { EditarNotaComponent } from '../editar-nota/editar-nota.component';

@Component({
  selector: 'app-ver-nota',
  standalone: true,
  imports: [ButtonComponent, ModalComponent],
  templateUrl: './ver-nota.component.html',
  styleUrl: './ver-nota.component.scss'
})
export class VerNotaComponent {
  constructor(
    private readonly modalService: ModalService
  ){}

  editarNota() {
    this.modalService.open(EditarNotaComponent)
  }

  fechar() {
    this.modalService.close();
  }
}
