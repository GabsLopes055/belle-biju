import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../../../../../../../shared/modal/modal.service';
import { ButtonComponent } from '../../../../../../../../../shared/button/button.component';
import { InputIconComponent } from '../../../../../../../../../shared/input-icon/input-icon.component';
import { ListComponent } from '../../../../../../../../../shared/list/list.component';
import { HeaderListComponent } from '../../../../../../../../../shared/list/components/header-list/header-list.component';
import { HeaderColComponent } from '../../../../../../../../../shared/list/components/header-col/header-col.component';
import { ItemListComponent } from '../../../../../../../../../shared/list/components/item-list/item-list.component';
import { ItemDataComponent } from '../../../../../../../../../shared/list/components/item-data/item-data.component';
import { meritoRequest } from '../../../../../../../../../models/merito.interface';
import { LancarMeritoComponent } from '../lancar-merito/lancar-merito.component';
import { VerMeritoComponent } from '../ver-merito/ver-merito.component';

@Component({
  selector: 'listar-meritos',
  standalone: true,
  imports: [
    ButtonComponent,
    InputIconComponent,
    ListComponent,
    HeaderListComponent,
    HeaderColComponent,
    ItemListComponent,
    ItemDataComponent,
  ],
  templateUrl: './listar-meritos.component.html',
  styleUrl: './listar-meritos.component.scss',
})
export class ListarMeritosComponent {
  listaMeritos: meritoRequest[] = [
    {
      id: '987654321',
      tipoMerito: 'Reconhecimento de Desempenho',
      descricao:
        'Atingiu metas de vendas e superou as expectativas no último trimestre.',
      colaborador: 'João Silva',
      createdAt: '2024-11-23T15:45:00Z',
    },
    {
      id: '987654321',
      tipoMerito: 'Reconhecimento de Desempenho',
      descricao:
        'Atingiu metas de vendas e superou as expectativas no último trimestre.',
      colaborador: 'João Silva',
      createdAt: '2024-11-23T15:45:00Z',
    },
    {
      id: '987654321',
      tipoMerito: 'Reconhecimento de Desempenho',
      descricao:
        'Atingiu metas de vendas e superou as expectativas no último trimestre.',
      colaborador: 'João Silva',
      createdAt: '2024-11-23T15:45:00Z',
    },

  ];

  form = new FormGroup({
    buscarTurma: new FormControl('', Validators.required),
  });

  constructor(private readonly modalService: ModalService) {}

  verMerito() {
    this.modalService.open(VerMeritoComponent);
  }

  lancarMerito() {
    this.modalService.open(LancarMeritoComponent);
  }
}
