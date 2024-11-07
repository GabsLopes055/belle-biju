import { Component } from '@angular/core';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";
import { ModalComponent } from "../../../../../../../../../shared/modal/modal.component";
import { BaixarChamadaComponent } from '../baixar-chamada/baixar-chamada.component';

@Component({
  selector: 'app-ver-chamada',
  standalone: true,
  imports: [ButtonComponent, ModalComponent],
  templateUrl: './ver-chamada.component.html',
  styleUrl: './ver-chamada.component.scss'
})
export class VerChamadaComponent {

  editar: boolean = false;

  constructor(
    private readonly modalService: ModalService
  ){}


  finalizarChamada() {
    this.modalService.close();
  }

  salvar() {
    this.editar = false;
  }

  baixarChamada() {
    this.modalService.open(BaixarChamadaComponent);
  }

  editarChamada() {
    if(!this.editar) {
      this.editar = !this.editar;
    } else {
      this.editar = false;
    }
    console.log(this.editar)
  }

}
