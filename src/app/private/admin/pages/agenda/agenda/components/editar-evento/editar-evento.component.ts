import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from '../../../../../../../shared/modal/modal.component';
import { DividerComponent } from '../../../../../../../shared/divider/divider.component';
import { InputIconComponent } from '../../../../../../../shared/input-icon/input-icon.component';
import { CheckboxComponent } from '../../../../../../../shared/checkbox/checkbox.component';
import { ToggleComponent } from '../../../../../../../shared/toggle/toggle.component';
import { TextareaComponent } from '../../../../../../../shared/textarea/textarea.component';
import { ButtonComponent } from '../../../../../../../shared/button/button.component';
import { ModalService } from '../../../../../../../shared/modal/modal.service';


@Component({
  selector: 'app-editar-evento',
  standalone: true,
  imports: [ModalComponent, DividerComponent, InputIconComponent, CheckboxComponent, ToggleComponent, TextareaComponent, ButtonComponent],
  templateUrl: './editar-evento.component.html',
  styleUrl: './editar-evento.component.scss'
})
export class EditarEventoComponent {
  form = new FormGroup({
    assunto: new FormControl('', Validators.required),
    data: new FormControl('', Validators.required),
    hora: new FormControl('', Validators.required),
  });

  constructor(
    private readonly modalService: ModalService
  ){}

  agendar() {
    this.modalService.close();
  }
}
