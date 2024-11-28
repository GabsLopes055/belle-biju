import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { ModalComponent } from "../../../../../../../../../shared/modal/modal.component";
import { DividerComponent } from "../../../../../../../../../shared/divider/divider.component";
import { InputIconComponent } from "../../../../../../../../../shared/input-icon/input-icon.component";
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";
import { TextareaComponent } from "../../../../../../../../../shared/textarea/textarea.component";

@Component({
  selector: 'app-lancar-documento',
  standalone: true,
  imports: [ModalComponent, DividerComponent, InputIconComponent, ButtonComponent, TextareaComponent],
  templateUrl: './lancar-documento.component.html',
  styleUrl: './lancar-documento.component.scss'
})
export class LancarDocumentoComponent {
  form = new FormGroup({
    tipoMerito: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required),
  })

  constructor(
    private readonly modalService: ModalService
  ){}


  cadastrar() {
    this.modalService.close();
  }
}
