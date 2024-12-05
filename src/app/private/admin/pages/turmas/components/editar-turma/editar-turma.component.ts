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
    nome: new FormControl('', Validators.required),
    serie: new FormControl('', Validators.required),
    turno: new FormControl('', Validators.required),
    anoLetivo: new FormControl('', Validators.required),
    curso: new FormControl('', Validators.required),
  });

  optionsTurno: OptionSelect[] = [
    { label: 'Matutino', value: 'matutino' },
    { label: 'Vespertino', value: 'vespertino' },
    { label: 'Noturno', value: 'noturno' }
  ];

  optionCursos: OptionSelect[] = [
    { label: 'Português', value: 'portugues' },
    { label: 'Matemática', value: 'matematica' },
    { label: 'História', value: 'historia' },
    { label: 'Português', value: 'portugues' },
    { label: 'Matemática', value: 'matematica' },
    { label: 'História', value: 'historia' },
    { label: 'Português', value: 'portugues' },
    { label: 'Matemática', value: 'matematica' },
    { label: 'História', value: 'historia' }
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
