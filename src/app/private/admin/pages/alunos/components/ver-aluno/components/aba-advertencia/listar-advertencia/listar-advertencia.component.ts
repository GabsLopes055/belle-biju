import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../../../../../../shared/button/button.component";
import { InputIconComponent } from "../../../../../../../../../shared/input-icon/input-icon.component";
import { ListComponent } from "../../../../../../../../../shared/list/list.component";
import { HeaderListComponent } from "../../../../../../../../../shared/list/components/header-list/header-list.component";
import { HeaderColComponent } from "../../../../../../../../../shared/list/components/header-col/header-col.component";
import { ItemListComponent } from "../../../../../../../../../shared/list/components/item-list/item-list.component";
import { ItemDataComponent } from "../../../../../../../../../shared/list/components/item-data/item-data.component";
import { advertencias } from '../../../../../../../../../models/advertencias.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { VerAdvertenciaComponent } from '../ver-advertencia/ver-advertencia.component';
import { LancarAdvertenciaComponent } from '../lancar-advertencia/lancar-advertencia.component';

@Component({
  selector: 'listar-advertencia',
  standalone: true,
  imports: [ButtonComponent, InputIconComponent, ListComponent, HeaderListComponent, HeaderColComponent, ItemListComponent, ItemDataComponent],
  templateUrl: './listar-advertencia.component.html',
  styleUrl: './listar-advertencia.component.scss'
})
export class ListarAdvertenciaComponent {
  advertencias: advertencias[] = [
    {
      assunto: 'Frequência',
      colaborador: 'Nome colaborador',
      descricao:
        'O aluno tem faltado muito, o que pode afetar o desempenho dele...',
      data: '29/04/2024 10:30',
    },
    {
      assunto: 'Frequência',
      colaborador: 'Nome colaborador',
      descricao:
        'O aluno tem faltado muito, o que pode afetar o desempenho dele...',
      data: '29/04/2024 10:30',
    },
  ];

  form = new FormGroup({
    buscarTurma: new FormControl('', Validators.required),
  });

  constructor(
    private readonly modalService: ModalService
  ) {
  }

  verAdvertencia() {
    this.modalService.open(VerAdvertenciaComponent);
  }
  lancarAdvertencia() {
    this.modalService.open(LancarAdvertenciaComponent);
  }
}
