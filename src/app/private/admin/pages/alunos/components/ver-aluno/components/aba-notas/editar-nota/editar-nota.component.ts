import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { ModalComponent } from "../../../../../../../../../shared/modal/modal.component";
import { DividerComponent } from "../../../../../../../../../shared/divider/divider.component";
import { InputIconComponent } from "../../../../../../../../../shared/input-icon/input-icon.component";
import { TextareaComponent } from "../../../../../../../../../shared/textarea/textarea.component";
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";

@Component({
  selector: 'app-editar-nota',
  standalone: true,
  imports: [ModalComponent, DividerComponent, InputIconComponent, TextareaComponent, ButtonComponent],
  templateUrl: './editar-nota.component.html',
  styleUrl: './editar-nota.component.scss'
})
export class EditarNotaComponent {

  form = new FormGroup({
    materia: new FormControl('', Validators.required),
    periodo: new FormControl('', Validators.required),
    tipoAvaliacao: new FormControl('', Validators.required),
    dataAvaliacao: new FormControl('', Validators.required),
    nota: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required),
  })

  constructor(
    private readonly modalService: ModalService
  ){}


  editar() {
    this.modalService.close();
  }
}
