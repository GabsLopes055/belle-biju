import { Component } from '@angular/core';
import { ModalComponent } from "../../../../../../../../../shared/modal/modal.component";
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { AusenciaJustificadaComponent } from './ausencia-justificada/ausencia-justificada.component';
import { InputIconComponent } from "../../../../../../../../../shared/input-icon/input-icon.component";

@Component({
  selector: 'app-realizar-chamada',
  standalone: true,
  imports: [ModalComponent, ButtonComponent, InputIconComponent],
  templateUrl: './realizar-chamada.component.html',
  styleUrl: './realizar-chamada.component.scss'
})
export class RealizarChamadaComponent {

  constructor(
    private readonly modalService: ModalService
  ){}


  finalizarChamada() {
    this.modalService.close();
  }

  ausenciaJustificada() {
    this.modalService.open(AusenciaJustificadaComponent)
  }

}
