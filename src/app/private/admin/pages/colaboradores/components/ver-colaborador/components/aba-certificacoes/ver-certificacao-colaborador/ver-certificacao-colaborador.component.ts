import { Component } from '@angular/core';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";
import { ModalComponent } from "../../../../../../../../../shared/modal/modal.component";

@Component({
  selector: 'app-ver-certificacao-colaborador',
  standalone: true,
  imports: [ButtonComponent, ModalComponent],
  templateUrl: './ver-certificacao-colaborador.component.html',
  styleUrl: './ver-certificacao-colaborador.component.scss'
})
export class VerCertificacaoColaboradorComponent {
  constructor(
    private readonly modalService: ModalService
  ){}

  editarNota() {
    // this.modalService.open(EditarAdvertenciaComponent)
  }

  fechar() {
    this.modalService.close();
  }
}
