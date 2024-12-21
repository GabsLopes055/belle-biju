import { Component } from '@angular/core';
import { ModalService } from '../../../../../shared/modal/modal.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../../../shared/button/button.component';
import { InputIconComponent } from '../../../../../shared/input-icon/input-icon.component';
import { ListComponent } from '../../../../../shared/list/list.component';
import { HeaderListComponent } from '../../../../../shared/list/components/header-list/header-list.component';
import { HeaderColComponent } from '../../../../../shared/list/components/header-col/header-col.component';
import { ItemListComponent } from '../../../../../shared/list/components/item-list/item-list.component';
import { ItemDataComponent } from '../../../../../shared/list/components/item-data/item-data.component';
import {
  Status,
  StatusCircleComponent,
} from '../../../../../shared/status-circle/status-circle.component';
import { NavbarService } from '../../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../../shared/menu/menu.service';
import { CriarPesquisaComponent } from './components/criar-pesquisa/criar-pesquisa.component';
import { VerPesquisaComponent } from './components/ver-pesquisa/ver-pesquisa.component';

@Component({
  selector: 'pesquisa-escola',
  standalone: true,
  imports: [
    ButtonComponent,
    InputIconComponent,
    ListComponent,
    HeaderListComponent,
    HeaderColComponent,
    ItemListComponent,
    ItemDataComponent,
    StatusCircleComponent,
  ],
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.scss',
})
export class PesquisaComponent {
  status: Status = Status.PENDENTE;

  form = new FormGroup({
    buscarTurma: new FormControl('', Validators.required),
  });

  constructor(
    private readonly modalService: ModalService,
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService
  ) {
    navbarService.setTitle('Agenda');
    menuService.setSelected({
      icon: 'assignment',
      label: 'Pesquisas',
      route: '/admin/pesquisas',
      checked: false,
    });
  }

  criarEvento() {
    this.modalService.open(CriarPesquisaComponent);
  }

  verEvento() {
    this.modalService.open(VerPesquisaComponent);
  }
}


