import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalService } from '../../../../../../../../../../../shared/modal/modal.service';
import { ModalComponent } from "../../../../../../../../../../../shared/modal/modal.component";
import { DividerComponent } from "../../../../../../../../../../../shared/divider/divider.component";
import { InputIconComponent } from "../../../../../../../../../../../shared/input-icon/input-icon.component";
import { ButtonComponent } from "../../../../../../../../../../../shared/button/button.component";
import { TextareaComponent } from "../../../../../../../../../../../shared/textarea/textarea.component";

@Component({
  selector: 'app-editar-conteudo',
  standalone: true,
  imports: [ModalComponent, DividerComponent, InputIconComponent, ButtonComponent, TextareaComponent],
  templateUrl: './editar-conteudo.component.html',
  styleUrl: './editar-conteudo.component.scss'
})
export class EditarConteudoComponent {
  form = new FormGroup({
    dataInicio: new FormControl(''),
    dataFim: new FormControl(''),
    observacao: new FormControl(''),
  })

  constructor(
    private readonly modalService: ModalService
  ){}


  cadastrar() {
    this.modalService.close();
  }
}
