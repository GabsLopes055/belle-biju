import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ColaboradoresService } from '../../colaboradores.service';
import { ToastService } from '../../../../../../shared/toast/toast.service';
import { InputIconComponent } from '../../../../../../shared/input-icon/input-icon.component';
import { CheckboxComponent } from '../../../../../../shared/checkbox/checkbox.component';
import { ButtonComponent } from '../../../../../../shared/button/button.component';

@Component({
  selector: 'editar-colaborador',
  standalone: true,
  imports: [InputIconComponent, CheckboxComponent, ButtonComponent],
  templateUrl: './editar-colaborador.component.html',
  styleUrl: './editar-colaborador.component.scss',
})
export class EditarColaboradorComponent {
  form = new FormGroup({
    nome: new FormControl('Maria da Silva', Validators.required),
    email: new FormControl('mariasilva@ayrtonsenna.gov', Validators.required),
    materia: new FormControl('Português', Validators.required),
  });

  constructor(
    private readonly colaboradoresService: ColaboradoresService,
    private readonly toast: ToastService
  ) {}

  receberEvento(event: boolean) {
    console.log(event)
  }

  salvar() {
    this.colaboradoresService.steps.next('listar-colaboradores');
    this.toast.notify({
      message: 'Colaborador editado com sucesso.',
      type: 'SUCCESS',
    });
  }
}
