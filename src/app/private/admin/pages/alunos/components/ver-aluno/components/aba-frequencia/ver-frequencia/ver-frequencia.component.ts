import { Component } from '@angular/core';
import { ModalComponent } from '../../../../../../../../../shared/modal/modal.component';
import { ButtonComponent } from '../../../../../../../../../shared/button/button.component';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';

@Component({
  selector: 'app-ver-frequencia',
  standalone: true,
  imports: [ModalComponent, ButtonComponent],
  templateUrl: './ver-frequencia.component.html',
  styleUrl: './ver-frequencia.component.scss'
})
export class VerFrequenciaComponent {
  constructor(
    private readonly modalService: ModalService
  ){}


  finalizarChamada() {
    this.modalService.close();
  }
}
