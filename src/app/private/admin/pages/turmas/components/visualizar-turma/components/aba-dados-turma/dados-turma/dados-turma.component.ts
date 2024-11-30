import { Component } from '@angular/core';
import { TurmasService } from '../../../../../turmas.service';
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";

@Component({
  selector: 'dados-turma',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './dados-turma.component.html',
  styleUrl: './dados-turma.component.scss'
})
export class DadosTurmaComponent {


  constructor(private readonly turmaService: TurmasService) {}


  editar() {
    this.turmaService.steps.next('editar-turma');
  }
}
