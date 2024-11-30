import { Component } from '@angular/core';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { ModalComponent } from "../../../../../../../../../shared/modal/modal.component";
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";
import { EditarConteudoComponent } from '../editar-conteudo/editar-conteudo.component';

@Component({
  selector: 'app-ver-conteudo',
  standalone: true,
  imports: [ModalComponent, ButtonComponent],
  templateUrl: './ver-conteudo.component.html',
  styleUrl: './ver-conteudo.component.scss'
})
export class VerConteudoComponent {
  constructor(
    private readonly modalService: ModalService
  ){}

  editarConteudo() {
    this.modalService.open(EditarConteudoComponent)
  }

  fechar() {
    this.modalService.close();
  }
}
