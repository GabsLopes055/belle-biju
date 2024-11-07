import { Component } from '@angular/core';
import { ModalComponent } from "../../../../../../../../shared/modal/modal.component";
import { DividerComponent } from "../../../../../../../../shared/divider/divider.component";
import { ModalService } from '../../../../../../../../shared/modal/modal.service';

@Component({
  selector: 'informacoes-turma',
  standalone: true,
  imports: [ModalComponent, DividerComponent],
  templateUrl: './informacoes-turma.component.html',
  styleUrl: './informacoes-turma.component.scss'
})
export class InformacoesTurmaComponent {
  constructor(private readonly modalService: ModalService) {}

  voltar() {
    this.modalService.close();
  }
}
