import { OptionSelect } from './../../../../../../shared/select/select.component';
import { ColaboradoresService } from './../../colaboradores.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../../../../../shared/toast/toast.service';
import { InputIconComponent } from '../../../../../../shared/input-icon/input-icon.component';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { CheckboxComponent } from '../../../../../../shared/checkbox/checkbox.component';
import { RadioComponent } from '../../../../../../shared/radio/radio.component';
import { SelectComponent } from "../../../../../../shared/select/select.component";

@Component({
  selector: 'cadastrar-colaborador',
  standalone: true,
  imports: [
    InputIconComponent,
    ButtonComponent,
    CheckboxComponent,
    RadioComponent,
    SelectComponent
],
  templateUrl: './cadastrar-colaborador.component.html',
  styleUrl: './cadastrar-colaborador.component.scss',
})
export class CadastrarColaboradorComponent {

  isProfessor: boolean = false;
  optionPerfis: OptionSelect[] = [
    {
      label: 'Diretor',
      value: 'diretor'
    },
    {
      label: 'Diretor Financeiro',
      value: 'diretorFinanceiro'
    },
    {
      label: 'Secretário',
      value: 'secretario'
    },
    {
      label: 'Auxiliar Secretário',
      value: 'auxiliarSecretário'
    },
    {
      label: 'Coordenador pedagógico',
      value: ''
    },
    {
      label: 'Coordenador Administrativo',
      value: ''
    },
    {
      label: 'Coordenador financeiro',
      value: ''
    },
    {
      label: 'Psicólogo',
      value: ''
    },
    {
      label: 'Assistente Social',
      value: ''
    },
    {
      label: 'Professor',
      value: ''
    },
    {
      label: 'Monitor',
      value: ''
    },
    {
      label: 'Porteiro',
      value: ''
    },
    {
      label: 'Zeladores',
      value: ''
    },
    {
      label: 'Patrimonio',
      value: ''
    },
    {
      label: 'Serviços Gerais',
      value: ''
    },
    {
      label: 'Vigía',
      value: ''
    },
    {
      label: 'Nutricionista',
      value: ''
    },
    {
      label: 'Cozinheiro',
      value: ''
    }
  ]

  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    materia: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required),
  });

  constructor(
    private readonly colaboradoresService: ColaboradoresService,
    private readonly toast: ToastService
  ) {}

  changeValue(event: any) {
    if(event === 'professor') {
      this.isProfessor = true;
    } else {
      this.isProfessor = false;
    }
  }

  salvar() {
    if(this.form.valid) {
      this.colaboradoresService.steps.next('listar-colaboradores');
      this.toast.notify({
        message: 'Colaborador cadastrado com sucesso.',
        type: 'SUCCESS',
      });
    } else {
      // this.campoObrigatorio = true;
    }
  }
}
