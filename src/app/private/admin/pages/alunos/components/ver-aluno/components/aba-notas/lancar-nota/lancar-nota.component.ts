import { Component } from '@angular/core';
import { ModalComponent } from "../../../../../../../../../shared/modal/modal.component";
import { DividerComponent } from "../../../../../../../../../shared/divider/divider.component";
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { InputIconComponent } from "../../../../../../../../../shared/input-icon/input-icon.component";
import { TextareaComponent } from "../../../../../../../../../shared/textarea/textarea.component";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lancar-nota',
  standalone: true,
  imports: [ModalComponent, DividerComponent, ButtonComponent, InputIconComponent, TextareaComponent],
  templateUrl: './lancar-nota.component.html',
  styleUrl: './lancar-nota.component.scss'
})
export class LancarNotaComponent {

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


  cadastrar() {
    this.modalService.close();
  }
}
