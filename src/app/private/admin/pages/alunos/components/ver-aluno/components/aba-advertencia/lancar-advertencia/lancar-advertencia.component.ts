import { Component } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { ModalComponent } from '../../../../../../../../../shared/modal/modal.component';
import { DividerComponent } from '../../../../../../../../../shared/divider/divider.component';
import { ButtonComponent } from '../../../../../../../../../shared/button/button.component';
import { InputIconComponent } from '../../../../../../../../../shared/input-icon/input-icon.component';
import { TextareaComponent } from '../../../../../../../../../shared/textarea/textarea.component';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';

@Component({
  selector: 'app-lancar-advertencia',
  standalone: true,
  imports: [ModalComponent, DividerComponent, ButtonComponent, InputIconComponent, TextareaComponent],
  templateUrl: './lancar-advertencia.component.html',
  styleUrl: './lancar-advertencia.component.scss'
})
export class LancarAdvertenciaComponent {

  form = new FormGroup({
    assunto: new FormControl(''),
    observacao: new FormControl(''),
  })

  constructor(
    private readonly modalService: ModalService
  ){}


  cadastrar() {
    this.modalService.close();
  }
}
