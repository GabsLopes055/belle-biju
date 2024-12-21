import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { AbrirCameraComponent } from '../../private/admin/pages/alunos/components/cadastrar-aluno/components/abrir-camera/abrir-camera.component';
import { ButtonComponent } from '../button/button.component';
import { TooltipDirective } from '../directives/tooltip.directive';
import { Menu } from '../menu/menu.component';
import { PerfilComponent } from '../perfil/perfil.component';
import { UserService } from '../services/user/user.service';
import { MenuService } from './../menu/menu.service';
import { NavbarService } from './navbar.service';
import { ModalService } from '../modal/modal.service';
import { AbrirModalChamadaComponent } from './components/abrir-modal-chamada/abrir-modal-chamada.component';

@Component({
  selector: 'navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [
    ButtonComponent,
    CommonModule,
    RouterLink,
    PerfilComponent,
    TooltipDirective,
    RouterLinkActive,
    AbrirCameraComponent,
  ],
})
export class NavbarComponent {
  isOpen = true;
  menu: Menu[] = [];
  isMenu = false;
  isDetail = false;
  title: any = '';
  isViajar = this.service.showBtnViajar;
  nameUser: string | undefined = '';

  constructor(
    private readonly service: NavbarService,
    private readonly userService: UserService,
    private readonly router: Router,
    private readonly menuService: MenuService,
    private readonly modalService: ModalService
  ) {
    this.title = service.title;
    this.menuService._menu.subscribe((menu) => (this.menu = menu));
    // console.log(usuario)
  }

  abrirModalChamada() {
    this.modalService.open(AbrirModalChamadaComponent);
  }

  showHideDetail() {
    this.isDetail = !this.isDetail;
  }

  visualizarPerfil() {
    this.router.navigate(['/admin/perfil']);
    this.showHideDetail();
  }

  abrirMenu() {
    this.isMenu = !this.isMenu;
    console.log(this.isMenu);
  }

  logout() {
    window.sessionStorage.removeItem('token');
    this.isDetail = false;
    this.router.navigate(['/login']);
    this.menuService._menu.next([]);
  }
}
