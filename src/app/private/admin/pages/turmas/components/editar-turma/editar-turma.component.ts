import { Component } from '@angular/core';
import { InputIconComponent } from "../../../../../../shared/input-icon/input-icon.component";
import { OptionSelect, SelectComponent } from "../../../../../../shared/select/select.component";
import { ButtonComponent } from "../../../../../../shared/button/button.component";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TurmasService } from '../../turmas.service';
import { ToastService } from '../../../../../../shared/toast/toast.service';

@Component({
  selector: 'editar-turma',
  standalone: true,
  imports: [InputIconComponent, SelectComponent, ButtonComponent],
  templateUrl: './editar-turma.component.html',
  styleUrl: './editar-turma.component.scss'
})
export class EditarTurmaComponent {

  form = new FormGroup({
    nome: new FormControl('8° Ano - Turma B', Validators.required),
    serie: new FormControl('8º ano', Validators.required),
    turno: new FormControl('Manhã', Validators.required),
    anoLetivo: new FormControl('2024', Validators.required),
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

  editar() {
    this.turmaService.steps.next('visualizar-turma');
    this.toast.notify({
      message: 'Turma editada com sucesso.',
      type: 'SUCCESS',
    });
  }

}
