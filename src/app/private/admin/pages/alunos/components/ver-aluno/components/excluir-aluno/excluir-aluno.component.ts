import { Component } from '@angular/core';
import { ModalService } from '../../../../../../../../shared/modal/modal.service';
import { ModalComponent } from "../../../../../../../../shared/modal/modal.component";
import { DividerComponent } from "../../../../../../../../shared/divider/divider.component";
import { ButtonComponent } from "../../../../../../../../shared/button/button.component";

@Component({
  selector: 'app-excluir-aluno',
  standalone: true,
  imports: [ModalComponent, DividerComponent, ButtonComponent],
  templateUrl: './excluir-aluno.component.html',
  styleUrl: './excluir-aluno.component.scss'
})
export class ExcluirAlunoComponent {
  constructor(
    private readonly modalService: ModalService
  ){}


  excluir() {
    this.modalService.close();
  }
}
