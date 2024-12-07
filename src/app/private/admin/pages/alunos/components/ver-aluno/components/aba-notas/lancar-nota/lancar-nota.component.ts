import { Component } from '@angular/core';
import { ModalComponent } from "../../../../../../../../../shared/modal/modal.component";
import { DividerComponent } from "../../../../../../../../../shared/divider/divider.component";
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { InputIconComponent } from "../../../../../../../../../shared/input-icon/input-icon.component";
import { TextareaComponent } from "../../../../../../../../../shared/textarea/textarea.component";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Tab, TabsComponent } from "../../../../../../../../../shared/tabs/tabs.component";
import { PrimeiroBimestreComponent } from './components/primeiro-bimestre/primeiro-bimestre.component';
import { AlunosService } from '../../../../../alunos.service';


@Component({
  selector: 'app-lancar-nota',
  standalone: true,
  imports: [ModalComponent, DividerComponent, ButtonComponent, InputIconComponent, TextareaComponent, TabsComponent, PrimeiroBimestreComponent],
  templateUrl: './lancar-nota.component.html',
  styleUrl: './lancar-nota.component.scss'
})
export class LancarNotaComponent {

  opcaoTabSelecionada = '';

  form = new FormGroup({
    materia: new FormControl('', Validators.required),
    periodo: new FormControl('', Validators.required),
    tipoAvaliacao: new FormControl('', Validators.required),
    dataAvaliacao: new FormControl('', Validators.required),
    nota: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required),
  })

  tabs: Tab[] = [
    {
      icon: '',
      label: '1º Bimestre',
      value: 'primeiro-bimestre',
      selected: false,
    },
    {
      icon: '',
      label: '2º Bimestre',
      value: 'segundo-bimestre',
      selected: false,
    },
    {
      icon: '',
      label: '3º Bimestre',
      value: 'terceiro-bimestre',
      selected: false,
    },
    {
      icon: '',
      label: '4º Bimestre',
      value: 'quarto-bimestre',
      selected: false,
    },
    {
      icon: '',
      label: 'Geral',
      value: 'geral',
      selected: false,
    },
  ];

  constructor(
    private readonly modalService: ModalService,
    private readonly alunoService: AlunosService
  ){
  }

  chosenTab(tab: string) {
    this.opcaoTabSelecionada = tab;
  }


  cadastrar() {
    this.modalService.close();
  }
}
