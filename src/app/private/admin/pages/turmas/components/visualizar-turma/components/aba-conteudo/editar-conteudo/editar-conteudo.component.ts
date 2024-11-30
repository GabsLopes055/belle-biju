import { Component } from '@angular/core';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from "../../../../../../../../../shared/modal/modal.component";
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";
import { TextareaComponent } from "../../../../../../../../../shared/textarea/textarea.component";
import { InputIconComponent } from "../../../../../../../../../shared/input-icon/input-icon.component";
import { DividerComponent } from "../../../../../../../../../shared/divider/divider.component";

@Component({
  selector: 'app-editar-conteudo',
  standalone: true,
  imports: [ModalComponent, ButtonComponent, TextareaComponent, InputIconComponent, DividerComponent],
  templateUrl: './editar-conteudo.component.html',
  styleUrl: './editar-conteudo.component.scss'
})
export class EditarConteudoComponent {
  form = new FormGroup({
    assunto: new FormControl('', Validators.required),
    materia: new FormControl('', Validators.required),
    observacao: new FormControl('', Validators.required),
  })

  constructor(
    private readonly modalService: ModalService
  ){}


  editar() {
    this.modalService.close();
  }
}
