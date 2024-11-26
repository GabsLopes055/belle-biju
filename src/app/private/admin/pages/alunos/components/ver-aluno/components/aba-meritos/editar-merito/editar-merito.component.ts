import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { ModalComponent } from "../../../../../../../../../shared/modal/modal.component";
import { DividerComponent } from "../../../../../../../../../shared/divider/divider.component";
import { InputIconComponent } from "../../../../../../../../../shared/input-icon/input-icon.component";
import { TextareaComponent } from "../../../../../../../../../shared/textarea/textarea.component";
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";

@Component({
  selector: 'app-editar-merito',
  standalone: true,
  imports: [ModalComponent, DividerComponent, InputIconComponent, TextareaComponent, ButtonComponent],
  templateUrl: './editar-merito.component.html',
  styleUrl: './editar-merito.component.scss'
})
export class EditarMeritoComponent {

  form = new FormGroup({
    tipoMerito: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required),
  })

  constructor(
    private readonly modalService: ModalService
  ){}


  editar() {
    this.modalService.close();
  }
}
