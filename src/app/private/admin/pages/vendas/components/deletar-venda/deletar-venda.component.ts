import { Component, Input } from '@angular/core';
import { ModalComponent } from '../../../../../../shared/modal/modal.component';
import { DividerComponent } from '../../../../../../shared/divider/divider.component';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { ModalService } from '../../../../../../shared/modal/modal.service';

@Component({
  selector: 'app-deletar-venda',
  standalone: true,
  imports: [ModalComponent, DividerComponent, ButtonComponent],
  templateUrl: './deletar-venda.component.html',
  styleUrl: './deletar-venda.component.scss',
})
export class DeletarVendaComponent {

  constructor(
    private readonly modalService: ModalService
  ){

  }

  excluir(boolean: boolean) {
    this.modalService.close(boolean);
  }
}
