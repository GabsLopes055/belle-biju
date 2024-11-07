import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputIconComponent } from '../../../../../../shared/input-icon/input-icon.component';
import { TurmasService } from '../../turmas.service';
import { ToastService } from '../../../../../../shared/toast/toast.service';
import {
  OptionSelect,
  SelectComponent,
} from '../../../../../../shared/select/select.component';

@Component({
  selector: 'criar-turma',
  standalone: true,
  imports: [ButtonComponent, InputIconComponent, SelectComponent],
  templateUrl: './criar-turma.component.html',
  styleUrl: './criar-turma.component.scss',
})
export class CriarTurmaComponent {
  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    serie: new FormControl('', Validators.required),
    turno: new FormControl('', Validators.required),
    anoLetivo: new FormControl('', Validators.required),
  });

  optionsTurno: OptionSelect[] = [
    { label: 'Matutino', value: 'matutino' },
    { label: 'Vespertino', value: 'nespertino' },
    { label: 'Noturno', value: 'noturno' }
  ];

  constructor(
    private readonly turmaService: TurmasService,
    private readonly toast: ToastService
  ) {}

  salvar() {
    this.turmaService.steps.next('listar-turmas');
    this.toast.notify({
      message: 'Aluno cadastrado com sucesso.',
      type: 'SUCCESS',
    });
  }
}
