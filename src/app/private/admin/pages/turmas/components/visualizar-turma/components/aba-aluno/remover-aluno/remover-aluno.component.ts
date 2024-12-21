import { Component } from '@angular/core';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";
import { DividerComponent } from "../../../../../../../../../shared/divider/divider.component";
import { ModalComponent } from "../../../../../../../../../shared/modal/modal.component";
import { SelectComponent } from "../../../../../../../../../shared/select/select.component";

@Component({
  selector: 'app-remover-aluno',
  standalone: true,
  imports: [ButtonComponent, DividerComponent, ModalComponent, SelectComponent],
  templateUrl: './remover-aluno.component.html',
  styleUrl: './remover-aluno.component.scss'
})
export class RemoverAlunoComponent {

  constructor(
    private readonly modalService: ModalService
  ){}


  excluir() {
    this.modalService.close();
  }

}
