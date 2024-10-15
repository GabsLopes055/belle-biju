import { Component } from '@angular/core';
import { ModalService } from '../../../../../../shared/modal/modal.service';
import { ModalComponent } from "../../../../../../shared/modal/modal.component";
import { DividerComponent } from "../../../../../../shared/divider/divider.component";
import { ButtonComponent } from "../../../../../../shared/button/button.component";

@Component({
  selector: 'app-excluir-colaborador',
  standalone: true,
  imports: [ModalComponent, DividerComponent, ButtonComponent],
  templateUrl: './excluir-colaborador.component.html',
  styleUrl: './excluir-colaborador.component.scss',
})
export class ExcluirColaboradorComponent {
  constructor(private readonly modalService: ModalService) {}

  excluir() {
    this.modalService.close();
  }
}
