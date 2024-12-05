import { Component } from '@angular/core';
import { ModalComponent } from "../../../../../../../../../../../shared/modal/modal.component";
import { DividerComponent } from "../../../../../../../../../../../shared/divider/divider.component";
import { InputIconComponent } from "../../../../../../../../../../../shared/input-icon/input-icon.component";
import { ButtonComponent } from "../../../../../../../../../../../shared/button/button.component";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../../../../../../../../../shared/modal/modal.service';

@Component({
  selector: 'app-lancar-nota-aluno',
  standalone: true,
  imports: [ModalComponent, DividerComponent, InputIconComponent, ButtonComponent],
  templateUrl: './lancar-nota-aluno.component.html',
  styleUrl: './lancar-nota-aluno.component.scss'
})
export class LancarNotaAlunoComponent {
  form = new FormGroup({
    tipoAvaliacao: new FormControl('', Validators.required),
    dataAvaliacao: new FormControl('', Validators.required),
    nota: new FormControl('', Validators.required),
  })

  constructor(
    private readonly modalService: ModalService
  ){}


  cadastrar() {
    this.modalService.close();
  }
}
