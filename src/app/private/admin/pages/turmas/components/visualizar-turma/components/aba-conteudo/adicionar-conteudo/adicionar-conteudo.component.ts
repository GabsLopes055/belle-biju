import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { DividerComponent } from "../../../../../../../../../shared/divider/divider.component";
import { ModalComponent } from "../../../../../../../../../shared/modal/modal.component";
import { InputIconComponent } from "../../../../../../../../../shared/input-icon/input-icon.component";
import { TextareaComponent } from "../../../../../../../../../shared/textarea/textarea.component";
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";
import { SelectComponent } from "../../../../../../../../../shared/select/select.component";

@Component({
  selector: 'app-adicionar-conteudo',
  standalone: true,
  imports: [DividerComponent, ModalComponent, InputIconComponent, TextareaComponent, ButtonComponent, SelectComponent],
  templateUrl: './adicionar-conteudo.component.html',
  styleUrl: './adicionar-conteudo.component.scss'
})
export class AdicionarConteudoComponent {
  form = new FormGroup({
    assunto: new FormControl('', Validators.required),
    materia: new FormControl('', Validators.required),
    observacao: new FormControl('', Validators.required),
  })

  constructor(
    private readonly modalService: ModalService
  ){}


  cadastrar() {
    this.modalService.close();
  }
}
