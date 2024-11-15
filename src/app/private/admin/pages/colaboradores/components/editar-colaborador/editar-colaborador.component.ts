import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ColaboradoresService } from '../../colaboradores.service';
import { ToastService } from '../../../../../../shared/toast/toast.service';
import { InputIconComponent } from '../../../../../../shared/input-icon/input-icon.component';
import { CheckboxComponent } from '../../../../../../shared/checkbox/checkbox.component';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { RadioComponent } from "../../../../../../shared/radio/radio.component";

@Component({
  selector: 'editar-colaborador',
  standalone: true,
  imports: [InputIconComponent, CheckboxComponent, ButtonComponent, RadioComponent],
  templateUrl: './editar-colaborador.component.html',
  styleUrl: './editar-colaborador.component.scss',
})
export class EditarColaboradorComponent {

  isProfessor: boolean = false;
  campoObrigatorio: boolean = false;

  form = new FormGroup({
    nome: new FormControl('Nome do Colaborador', Validators.required),
    email: new FormControl('E-mail.colaborador.com.br', Validators.required),
    materia: new FormControl('Materia', Validators.required),
    tipo: new FormControl('professor', Validators.required),
  });

  constructor(
    private readonly colaboradoresService: ColaboradoresService,
    private readonly toast: ToastService
  ) {}

  receberEvento(event: boolean) {
    console.log(event)
  }

  changeValue(event: any) {
    if(event === 'professor') {
      this.isProfessor = true;
    } else {
      this.isProfessor = false;
    }
  }

  salvar() {
    this.colaboradoresService.steps.next('listar-colaboradores');
    this.toast.notify({
      message: 'Colaborador editado com sucesso.',
      type: 'SUCCESS',
    });
  }
}
