import { Component } from '@angular/core';
import { InputIconComponent } from "../../../../../../shared/input-icon/input-icon.component";
import { OptionSelect, SelectComponent } from "../../../../../../shared/select/select.component";
import { ButtonComponent } from "../../../../../../shared/button/button.component";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TurmasService } from '../../turmas.service';
import { ToastService } from '../../../../../../shared/toast/toast.service';
import { alunoResponse } from '../../../../../../models/alunos.interface';
import { professores } from '../../../../../../models/professores.interface';
import { AlunosService } from '../../../alunos/alunos.service';
import { HeaderColComponent } from "../../../../../../shared/list/components/header-col/header-col.component";
import { ItemDataComponent } from "../../../../../../shared/list/components/item-data/item-data.component";
import { ItemListComponent } from "../../../../../../shared/list/components/item-list/item-list.component";
import { CheckboxComponent } from "../../../../../../shared/checkbox/checkbox.component";
import { HeaderListComponent } from "../../../../../../shared/list/components/header-list/header-list.component";
import { ListComponent } from "../../../../../../shared/list/list.component";
import { ChipsComponent } from "../../../../../../shared/chips/chips.component";
import { StepperComponent, steps } from "../../../../../../shared/stepper/stepper.component";

@Component({
  selector: 'editar-turma',
  standalone: true,
  imports: [InputIconComponent, SelectComponent, ButtonComponent, HeaderColComponent, ItemDataComponent, ItemListComponent, CheckboxComponent, HeaderListComponent, ListComponent, ChipsComponent, StepperComponent],
  templateUrl: './editar-turma.component.html',
  styleUrl: './editar-turma.component.scss'
})
export class EditarTurmaComponent {
  stepRegisterTurma: 'dados-turma' | 'colaboradores' | 'alunos' = 'dados-turma';

  steps: steps[] = [
      {
        label: 'Dados da Turma',
        value: 'dados-turma',
        active: true,
      },
      {
        label: 'Colaboradores',
        value: 'colaboradores',
        active: false,
      },
      {
        label: 'Alunos',
        value: 'alunos',
        active: false,
      },
    ];

  alunos: alunoResponse[] = [];

  chipSelectedDadosTurma: boolean = true;
  chipSelectedColaboradores: boolean = false;
  chipSelectedAlunos: boolean = false;

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
    { label: 'Noturno', value: 'noturno' },
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
    { label: 'História', value: 'historia' },
  ];

  professores: professores[] = [
    {
      nome: 'Maria Silva',
      email: 'mariasilva@ayrtonsenna.gov',
      materia: 'Português',
      perfil: 'Professor(a)',
    },
    {
      nome: 'João Santos',
      email: 'joaosantos@ayrtonsenna.gov',
      materia: 'Matemática',
      perfil: 'Professor(a)',
    },
    {
      nome: 'Ana Oliveira',
      email: 'anaoliveira@ayrtonsenna.gov',
      materia: 'História',
      perfil: 'Professor(a)',
    },
    {
      nome: 'Maria Silva',
      email: 'mariasilva@ayrtonsenna.gov',
      materia: 'Português',
      perfil: 'Professor(a)',
    },
    {
      nome: 'João Santos',
      email: 'joaosantos@ayrtonsenna.gov',
      materia: 'Matemática',
      perfil: 'Professor(a)',
    },
    {
      nome: 'Ana Oliveira',
      email: 'anaoliveira@ayrtonsenna.gov',
      materia: 'História',
      perfil: 'Professor(a)',
    },
  ];

  constructor(
    private readonly turmaService: TurmasService,
    private readonly toast: ToastService,
    private readonly alunosService: AlunosService
  ) {}

  ngOnInit(): void {
    this.listarAlunos();
  }

  next() {
    const lastIndex = this.steps.findLastIndex((step) => step.active);

    console.log(lastIndex);

    if (lastIndex < this.steps.length - 1) {
      this.steps[lastIndex + 1].active = true;

      console.log();

      if (this.steps[lastIndex + 1].value === 'colaboradores') {
        this.stepRegisterTurma = 'colaboradores';
      }
      if (this.steps[lastIndex + 1].value === 'alunos') {
        this.stepRegisterTurma = 'alunos';
      }
    }
  }


  listarAlunos() {
    this.alunosService.listarAlunos({ page: 1, limit: 1000 }).subscribe({
      next: (value) => {
        this.alunos = value.data;
        console.log(value.data)
      },
      error: (err) => {
        this.toast.notify({
          message: 'Erro ao listar alunos.',
          type: 'ERROR',
        });
      },
    });
  }

  back() {
    if (this.stepRegisterTurma === 'colaboradores') {
      this.stepRegisterTurma = 'dados-turma';
      this.chipSelectedColaboradores = false;
      return;
    }
    if (this.stepRegisterTurma === 'alunos') {
      this.stepRegisterTurma = 'colaboradores';
      this.chipSelectedAlunos = false;
      return;
    }
    this.turmaService.steps.next('listar-turmas');
  }

  salvar() {
    if (this.stepRegisterTurma === 'dados-turma') {
      this.stepRegisterTurma = 'colaboradores';
      this.chipSelectedColaboradores = true;
      return;
    }
    if (this.stepRegisterTurma === 'colaboradores') {
      this.stepRegisterTurma = 'alunos';
      this.chipSelectedAlunos = true;
      return;
    }

    // this.turmaService.steps.next('listar-turmas');
    // this.toast.notify({
    //   message: 'Aluno cadastrado com sucesso.',
    //   type: 'SUCCESS',
    // });
  }
}
