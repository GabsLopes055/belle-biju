import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../shared/menu/menu.service';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { InputIconComponent } from '../../../../shared/input-icon/input-icon.component';
import { LoaderComponent } from '../../../../shared/loader/loader.component';
import { ListComponent } from '../../../../shared/list/list.component';
import { HeaderListComponent } from '../../../../shared/list/components/header-list/header-list.component';
import { HeaderColComponent } from '../../../../shared/list/components/header-col/header-col.component';
import { ItemDataComponent } from '../../../../shared/list/components/item-data/item-data.component';
import { ItemListComponent } from '../../../../shared/list/components/item-list/item-list.component';
import { VendasService } from './vendas.service';
import { vendasResponse } from '../../../../models/vendas.interface';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../../../shared/sidebar/sidebar.service';
import { VerVendaComponent } from './components/ver-venda/ver-venda.component';
import { CadastrarVendaComponent } from './components/cadastrar-venda/cadastrar-venda.component';
import { ModalService } from '../../../../shared/modal/modal.service';
import { DeletarVendaComponent } from './components/deletar-venda/deletar-venda.component';
import { ToastService } from '../../../../shared/toast/toast.service';

@Component({
  selector: 'app-vendas',
  standalone: true,
  imports: [
    ButtonComponent,
    InputIconComponent,
    LoaderComponent,
    ListComponent,
    HeaderListComponent,
    HeaderColComponent,
    ItemDataComponent,
    ItemListComponent,
    CommonModule,
  ],
  templateUrl: './vendas.component.html',
  styleUrl: './vendas.component.scss',
})
export class VendasComponent implements OnInit {
  vendas: vendasResponse[] = [];

  loading: boolean = true;

  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService,
    private readonly vendasService: VendasService,
    private readonly sidebarService: SidebarService,
    private readonly modalService: ModalService,
    private readonly toast: ToastService
  ) {
    navbarService.setTitle('Vendas');
    menuService.setSelected({
      icon: 'sell',
      label: 'Vendas',
      route: '/admin/vendas',
      checked: true,
    });
  }

  ngOnInit(): void {
    this.vendasService.listarVendas().subscribe({
      next: (venda) => {
        this.vendas = venda;
        this.loading = false;
      },
    });
  }

  deletarVenda(arg0: string) {
    const modalRef = this.modalService.open(DeletarVendaComponent);
    modalRef.afterClosed.subscribe((value) => {
      if (value) {
        this.vendasService.deletarVenda(arg0).subscribe({});
        this.toast.notify({message: 'Venda Excluida com Sucesso !', type: 'SUCCESS'})
        this.ngOnInit();
      }
    });
  }

  cadastrarVenda() {
    const modalRef = this.sidebarService.openSide(CadastrarVendaComponent);
    modalRef.sub.subscribe((value) => {
      if (value) {
        this.ngOnInit();
      }
    });
  }

  verVenda(_t30: vendasResponse) {
    const modalRef = this.sidebarService.openSideWithData(VerVendaComponent, {
      data: _t30,
    });
    modalRef.afterClosed.subscribe((value) => {
      if (value) {
        this.ngOnInit();
      }
    });
  }
}
