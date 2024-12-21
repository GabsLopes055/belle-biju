import { Component } from '@angular/core';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { ModalComponent } from "../../../../../../../../../shared/modal/modal.component";
import { DividerComponent } from "../../../../../../../../../shared/divider/divider.component";
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";
import { SelectComponent } from "../../../../../../../../../shared/select/select.component";

@Component({
  selector: 'app-remover-professor',
  standalone: true,
  imports: [ModalComponent, DividerComponent, ButtonComponent, SelectComponent],
  templateUrl: './remover-professor.component.html',
  styleUrl: './remover-professor.component.scss'
})
export class RemoverProfessorComponent {
  constructor(
    private readonly modalService: ModalService
  ){}


  excluir() {
    this.modalService.close();
  }
}
