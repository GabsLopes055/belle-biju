import { ColaboradoresService } from './../../colaboradores.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../../../../../shared/toast/toast.service';
import { InputIconComponent } from "../../../../../../shared/input-icon/input-icon.component";
import { ButtonComponent } from "../../../../../../shared/button/button.component";
import { CheckboxComponent } from "../../../../../../shared/checkbox/checkbox.component";
import { RadioComponent } from "../../../../../../shared/radio/radio.component";

@Component({
  selector: 'cadastrar-colaborador',
  standalone: true,
  imports: [InputIconComponent, ButtonComponent, CheckboxComponent, RadioComponent],
  templateUrl: './cadastrar-colaborador.component.html',
  styleUrl: './cadastrar-colaborador.component.scss'
})
export class CadastrarColaboradorComponent {

  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    materia: new FormControl('', Validators.required)
  })

  constructor(
    private readonly colaboradoresService: ColaboradoresService,
    private readonly toast: ToastService
  ){}

  salvar() {
    this.colaboradoresService.steps.next("listar-colaboradores");
    this.toast.notify({message: 'Colaborador cadastrado com sucesso.', type: "SUCCESS"});
  }
}
