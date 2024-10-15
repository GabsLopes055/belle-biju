import { Component } from '@angular/core';
import { ModalService } from '../../../../../../../../shared/modal/modal.service';
import { ModalComponent } from "../../../../../../../../shared/modal/modal.component";
import { DividerComponent } from "../../../../../../../../shared/divider/divider.component";
import { ButtonComponent } from "../../../../../../../../shared/button/button.component";
import { InputIconComponent } from "../../../../../../../../shared/input-icon/input-icon.component";
import { FormControl, FormGroup } from '@angular/forms';
import { TextareaComponent } from "../../../../../../../../shared/textarea/textarea.component";

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


  excluir() {
    this.modalService.close();
  }
}
