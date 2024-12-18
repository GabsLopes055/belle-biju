import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../shared/menu/menu.service';
import { PerfilComponent } from '../../../../shared/perfil/perfil.component';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { DividerComponent } from '../../../../shared/divider/divider.component';
import { SidebarService } from '../../../../shared/sidebar/sidebar.service';
import { AlterarSenhaComponent } from './components/alterar-senha/alterar-senha.component';
import { AlterarDadosComponent } from './components/alterar-dados/alterar-dados.component';
import { UserService } from '../../../../shared/services/user/user.service';
import { User } from '../../../../models/authentication.interface';
import { LoaderComponent } from "../../../../shared/loader/loader.component";

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [PerfilComponent, ButtonComponent, DividerComponent, LoaderComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss',
})
export class PerfilUsuarioComponent implements OnInit {

  user!: User;
  loading: boolean = true;

  constructor(
    private readonly navbarService: NavbarService,
    private readonly sidebarService: SidebarService,
    private readonly userService: UserService
  ) {
    navbarService.setTitle('Perfil');
    // menuService.setSelected({
    //   icon: 'badge',
    //   label: 'Colaboradores',
    //   route: '/admin/colaboradores',
    //   checked: true,
    // });
  }
  ngOnInit(): void {
    this.buscarUsuarioPorID();
  }

  buscarUsuarioPorID() {
    this.userService.buscarUserPorId().subscribe({
      next: (user) => {
        this.user = user;
        this.loading = false;
      },
    });
  }

  abrirModalAlterarSenha() {
    this.sidebarService.openSide(AlterarSenhaComponent);
  }
  abrirModalAlterarDados() {
    this.sidebarService.openSide(AlterarDadosComponent);
  }
}
