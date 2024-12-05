import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalService } from '../../../../../../../../../../../shared/modal/modal.service';
import { ModalComponent } from "../../../../../../../../../../../shared/modal/modal.component";
import { DividerComponent } from "../../../../../../../../../../../shared/divider/divider.component";
import { InputIconComponent } from "../../../../../../../../../../../shared/input-icon/input-icon.component";
import { TextareaComponent } from "../../../../../../../../../../../shared/textarea/textarea.component";
import { ButtonComponent } from "../../../../../../../../../../../shared/button/button.component";

@Component({
  selector: 'app-concluir-conteudo',
  standalone: true,
  imports: [ModalComponent, DividerComponent, InputIconComponent, TextareaComponent, ButtonComponent],
  templateUrl: './concluir-conteudo.component.html',
  styleUrl: './concluir-conteudo.component.scss'
})
export class ConcluirConteudoComponent {
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
