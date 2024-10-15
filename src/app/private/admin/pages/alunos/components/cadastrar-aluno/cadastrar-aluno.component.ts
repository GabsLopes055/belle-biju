import { alunos } from './../../../../../../models/alunos.interface';
import { AlunosService } from './../../alunos.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputIconComponent } from '../../../../../../shared/input-icon/input-icon.component';
import { ButtonComponent } from '../../../../../../shared/button/button.component';
import { ToastService } from '../../../../../../shared/toast/toast.service';

@Component({
  selector: 'cadastrar-aluno',
  standalone: true,
  imports: [InputIconComponent, ButtonComponent],
  templateUrl: './cadastrar-aluno.component.html',
  styleUrl: './cadastrar-aluno.component.scss',
})
export class CadastrarAlunoComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>; // Referência ao input de arquivo

  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    responsavel: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    foto_aluno: new FormControl<File | null>(null, Validators.required),
  });

  constructor(
    private readonly alunosService: AlunosService,
    private readonly toast: ToastService
  ) {}

  salvar() {
    this.alunosService.steps.next('listar-alunos');
    this.toast.notify({message: 'Aluno cadastrado com sucesso.', type: "SUCCESS"});
  }

  selecionarArquivo() {
    this.fileInput.nativeElement.click(); // Usa ViewChild para clicar no input
  }

  // Método para capturar o arquivo selecionado
  fileSelecionado(event: any) {

    const file: File = event.target.files[0];

    this.form.patchValue({ foto_aluno: file });

    this.form.get('foto_aluno')?.updateValueAndValidity();
  }
}
