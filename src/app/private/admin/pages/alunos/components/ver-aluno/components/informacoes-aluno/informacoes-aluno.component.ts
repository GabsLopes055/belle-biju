import { Component } from '@angular/core';
import { ModalComponent } from "../../../../../../../../shared/modal/modal.component";
import { DividerComponent } from "../../../../../../../../shared/divider/divider.component";
import { ModalService } from '../../../../../../../../shared/modal/modal.service';

@Component({
  selector: 'app-informacoes-aluno',
  standalone: true,
  imports: [ModalComponent, DividerComponent],
  templateUrl: './informacoes-aluno.component.html',
  styleUrl: './informacoes-aluno.component.scss'
})
export class InformacoesAlunoComponent {
  constructor(private readonly modalService: ModalService) {}

  voltar() {
    this.modalService.close();
  }
}
