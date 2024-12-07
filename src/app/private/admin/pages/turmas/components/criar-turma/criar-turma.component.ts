import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputIconComponent } from '../../../../../../shared/input-icon/input-icon.component';
import { TurmasService } from '../../turmas.service';
import { ToastService } from '../../../../../../shared/toast/toast.service';
import {
  OptionSelect,
  SelectComponent,
} from '../../../../../../shared/select/select.component';
import { TextareaComponent } from '../../../../../../shared/textarea/textarea.component';
import { ChipsComponent } from '../../../../../../shared/chips/chips.component';
import { ListComponent } from '../../../../../../shared/list/list.component';
import { HeaderListComponent } from '../../../../../../shared/list/components/header-list/header-list.component';
import { HeaderColComponent } from '../../../../../../shared/list/components/header-col/header-col.component';
import { ItemListComponent } from '../../../../../../shared/list/components/item-list/item-list.component';
import { ItemDataComponent } from '../../../../../../shared/list/components/item-data/item-data.component';
import { professores } from '../../../../../../models/professores.interface';
import { CheckboxComponent } from '../../../../../../shared/checkbox/checkbox.component';
import { AlunosService } from '../../../alunos/alunos.service';
import { alunoResponse } from '../../../../../../models/alunos.interface';

@Component({
  selector: 'criar-turma',
  standalone: true,
  imports: [
    ButtonComponent,
    InputIconComponent,
    SelectComponent,
    TextareaComponent,
    ChipsComponent,
    ListComponent,
    HeaderListComponent,
    HeaderColComponent,
    ItemListComponent,
    ItemDataComponent,
    CheckboxComponent,
  ],
  templateUrl: './criar-turma.component.html',
  styleUrl: './criar-turma.component.scss',
})
export class CriarTurmaComponent implements OnInit {
  stepRegisterTurma: 'dados-turma' | 'colaboradores' | 'alunos' = 'dados-turma';

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
