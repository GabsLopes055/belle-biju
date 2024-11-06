import { Component } from '@angular/core';
import { ModalComponent } from "../../../../../../../../shared/modal/modal.component";
import { DividerComponent } from "../../../../../../../../shared/divider/divider.component";
import { ButtonComponent } from "../../../../../../../../shared/button/button.component";
import { ModalService } from '../../../../../../../../shared/modal/modal.service';

@Component({
  selector: 'app-informacoes-colaborador',
  standalone: true,
  imports: [ModalComponent, DividerComponent, ButtonComponent],
  templateUrl: './informacoes-colaborador.component.html',
  styleUrl: './informacoes-colaborador.component.scss'
})
export class InformacoesColaboradorComponent {
  constructor(private readonly modalService: ModalService) {}

  voltar() {
    this.modalService.close();
  }
}
