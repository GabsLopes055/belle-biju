import { ColaboradoresService } from './colaboradores.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarService } from '../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../shared/menu/menu.service';
import { ListarColaboradoresComponent } from "./components/listar-colaboradores/listar-colaboradores.component";
import { CadastrarColaboradorComponent } from "./components/cadastrar-colaborador/cadastrar-colaborador.component";
import { VerColaboradorComponent } from "./components/ver-colaborador/ver-colaborador.component";
import { EditarColaboradorComponent } from "./components/editar-colaborador/editar-colaborador.component";

@Component({
  selector: 'app-colaboradores',
  standalone: true,
  imports: [ListarColaboradoresComponent, CadastrarColaboradorComponent, VerColaboradorComponent, EditarColaboradorComponent],
  templateUrl: './colaboradores.component.html',
  styleUrl: './colaboradores.component.scss',
})
export class ColaboradoresComponent implements OnInit, OnDestroy {

  component: string = '';

  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService,
    private readonly colaboradoresService: ColaboradoresService
  ) {
    navbarService.setTitle('Colaboradores');
    menuService.setSelected({
      icon: 'badge',
      label: 'Colaboradores',
      route: '/admin/colaboradores',
      checked: true,
    });
  }

  ngOnInit(): void {
    this.colaboradoresService.steps.subscribe((value) => {
      this.component = value;
    });
  }

  ngOnDestroy(): void {
    this.colaboradoresService.steps.next('listar-colaboradores');
  }
}


