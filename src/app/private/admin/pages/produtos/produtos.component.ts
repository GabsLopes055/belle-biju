import { Component } from '@angular/core';
import { NavbarService } from '../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../shared/menu/menu.service';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent {
  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService
  ) {
    navbarService.setTitle('Produtos');
    menuService.setSelected({
      icon: 'inventory_2',
      label: 'Produtos',
      route: '/admin/produtos',
      checked: true,
    });
  }
}
