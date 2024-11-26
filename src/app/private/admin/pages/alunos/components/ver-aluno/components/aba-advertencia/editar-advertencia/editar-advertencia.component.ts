import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { ModalComponent } from "../../../../../../../../../shared/modal/modal.component";
import { DividerComponent } from "../../../../../../../../../shared/divider/divider.component";
import { InputIconComponent } from "../../../../../../../../../shared/input-icon/input-icon.component";
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";
import { TextareaComponent } from "../../../../../../../../../shared/textarea/textarea.component";

@Component({
  selector: 'app-editar-advertencia',
  standalone: true,
  imports: [ModalComponent, DividerComponent, InputIconComponent, ButtonComponent, TextareaComponent],
  templateUrl: './editar-advertencia.component.html',
  styleUrl: './editar-advertencia.component.scss'
})
export class EditarAdvertenciaComponent {
  form = new FormGroup({
    assunto: new FormControl(''),
    observacao: new FormControl(''),
  })

  constructor(
    private readonly modalService: ModalService
  ){}


  editar() {
    this.modalService.close();
  }
}
