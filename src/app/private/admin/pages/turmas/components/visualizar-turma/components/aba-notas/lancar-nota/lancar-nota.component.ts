import { Component } from '@angular/core';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";
import { ModalComponent } from "../../../../../../../../../shared/modal/modal.component";
import { LancarNotaAlunoComponent } from './components/lancar-nota-aluno/lancar-nota-aluno.component';

@Component({
  selector: 'lancar-nota',
  standalone: true,
  imports: [ButtonComponent, ModalComponent],
  templateUrl: './lancar-nota.component.html',
  styleUrl: './lancar-nota.component.scss'
})
export class LancarNotaComponent {
  constructor(
    private readonly modalService: ModalService
  ){}

  editarNota() {
    // this.modalService.open(EditarAdvertenciaComponent)
  }

  abrirModalLancarNota() {
    this.modalService.open(LancarNotaAlunoComponent)
  }

  fechar() {
    this.modalService.close();
  }
}
