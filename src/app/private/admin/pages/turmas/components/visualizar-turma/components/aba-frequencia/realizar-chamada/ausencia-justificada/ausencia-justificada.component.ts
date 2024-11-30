import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalService } from '../../../../../../../../../../shared/modal/modal.service';
import { ModalComponent } from "../../../../../../../../../../shared/modal/modal.component";
import { DividerComponent } from "../../../../../../../../../../shared/divider/divider.component";
import { InputIconComponent } from "../../../../../../../../../../shared/input-icon/input-icon.component";
import { TextareaComponent } from "../../../../../../../../../../shared/textarea/textarea.component";
import { ButtonComponent } from "../../../../../../../../../../shared/button/button.component";

@Component({
  selector: 'app-ausencia-justificada',
  standalone: true,
  imports: [ModalComponent, DividerComponent, InputIconComponent, TextareaComponent, ButtonComponent],
  templateUrl: './ausencia-justificada.component.html',
  styleUrl: './ausencia-justificada.component.scss'
})
export class AusenciaJustificadaComponent {
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
