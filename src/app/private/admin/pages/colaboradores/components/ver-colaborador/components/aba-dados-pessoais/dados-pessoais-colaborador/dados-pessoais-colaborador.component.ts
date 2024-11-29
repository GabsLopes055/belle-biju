import { ColaboradoresService } from './../../../../../colaboradores.service';
import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";

@Component({
  selector: 'dados-pessoais-colaborador',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './dados-pessoais-colaborador.component.html',
  styleUrl: './dados-pessoais-colaborador.component.scss'
})
export class DadosPessoaisColaboradorComponent {

  constructor(private colaboradoresService: ColaboradoresService) {

  }


  editar() {
    this.colaboradoresService.steps.next('editar-colaborador');
  }
}
