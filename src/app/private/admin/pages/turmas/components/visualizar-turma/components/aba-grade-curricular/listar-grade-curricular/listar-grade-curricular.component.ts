import { Component } from '@angular/core';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemListComponent } from '../../../../../../../../../shared/list/components/item-list/item-list.component';
import { ItemDataComponent } from '../../../../../../../../../shared/list/components/item-data/item-data.component';
import { ChipsComponent } from '../../../../../../../../../shared/chips/chips.component';
import { ButtonComponent } from '../../../../../../../../../shared/button/button.component';
import { InputIconComponent } from '../../../../../../../../../shared/input-icon/input-icon.component';
import { ListComponent } from '../../../../../../../../../shared/list/list.component';
import { HeaderListComponent } from '../../../../../../../../../shared/list/components/header-list/header-list.component';
import { HeaderColComponent } from '../../../../../../../../../shared/list/components/header-col/header-col.component';
import { gradeCurricular } from '../../../../../../../../../models/grade-curricular.interface';
import { EditarConteudoComponent } from './components/editar-conteudo/editar-conteudo.component';
import { ConcluirConteudoComponent } from './components/concluir-conteudo/concluir-conteudo.component';

@Component({
  selector: 'listar-grade-curricular',
  standalone: true,
  imports: [
    ItemListComponent,
    ItemDataComponent,
    ChipsComponent,
    ButtonComponent,
    InputIconComponent,
    ListComponent,
    HeaderListComponent,
    HeaderColComponent,
  ],
  templateUrl: './listar-grade-curricular.component.html',
  styleUrl: './listar-grade-curricular.component.scss',
})
export class ListarGradeCurricularComponent {
  data: gradeCurricular[] = [
    {
      conteudo: 'Introdução à Linguística',
      periodo: '1º Bimestre',
      dataInicio: '02/02/2024',
      dataFim: '02/02/2024',
      observacao: '',
      finalizado: true,
    },
    {
      conteudo: 'Leitura e Produção de Textos',
      periodo: '1º Bimestre',
      dataInicio: '02/02/2024',
      dataFim: '02/02/2024',
      observacao: '',
      finalizado: true,
    },
    {
      conteudo: 'Teoria Literária I',
      periodo: '2º Bimestre',
      dataInicio: '02/02/2024',
      dataFim: '- -',
      observacao: '',
      finalizado: false,
    },
    {
      conteudo: 'História da Língua Portuguesa',
      periodo: '3º Bimestre',
      dataInicio: '02/02/2024',
      dataFim: '- -',
      observacao: '',
      finalizado: false,
    },
    {
      conteudo: 'Fonologia e Morfologia',
      periodo: '3º Bimestre',
      dataInicio: '- -',
      dataFim: '- -',
      observacao: '',
      finalizado: false,
    },
  ];

  chipSelected: string = 'Língua Portuguesa';

  constructor(private readonly modalService: ModalService) {}

  form = new FormGroup({
    buscarTurma: new FormControl('', Validators.required),
  });

  editarConteudo() {
    this.modalService.open(EditarConteudoComponent);
  }

  concluirConteudo() {
    this.modalService.open(ConcluirConteudoComponent);
  }

  eventChipSelected(event: string, materia: string) {
    if (event === materia) {
      this.chipSelected = event;
    }
  }

  realizarChamada() {
    // this.modalService.open(RealizarChamadaComponent);
  }
}
