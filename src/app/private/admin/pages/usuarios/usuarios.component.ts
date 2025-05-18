import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../shared/menu/menu.service';
import { LoaderComponent } from "../../../../shared/loader/loader.component";
import { ButtonComponent } from "../../../../shared/button/button.component";
import { InputIconComponent } from "../../../../shared/input-icon/input-icon.component";
import { ListComponent } from "../../../../shared/list/list.component";
import { HeaderListComponent } from "../../../../shared/list/components/header-list/header-list.component";
import { HeaderColComponent } from "../../../../shared/list/components/header-col/header-col.component";
import { userResponse } from '../../../../models/user.interface';
import { ItemListComponent } from "../../../../shared/list/components/item-list/item-list.component";
import { ItemDataComponent } from "../../../../shared/list/components/item-data/item-data.component";
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [LoaderComponent, ButtonComponent, InputIconComponent, ListComponent, HeaderListComponent, HeaderColComponent, ItemListComponent, ItemDataComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent implements OnInit{
  loading: boolean = true;

  usuarios: userResponse[] = [];

  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService,
    private readonly usuarioService: UsuariosService
  ) {
    navbarService.setTitle('Usuários');
    menuService.setSelected({
      icon: 'group',
      label: 'Usuários',
      route: '/admin/usuarios',
      checked: true,
    });
  }
  ngOnInit(): void {
    this.usuarioService.buscarTodosUsuarios().subscribe({
      next: (usuarios) => {
        this.usuarios = usuarios;
        this.loading = false;
      }
    })
  }


}
