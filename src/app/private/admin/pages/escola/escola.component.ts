import { Component } from '@angular/core';
import { NavbarService } from '../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../shared/menu/menu.service';
import { EscolaService } from './escola.service';
import { DashboardComponent } from './aba-dashboard/dashboard/dashboard.component';
import { Tab, TabsComponent } from '../../../../shared/tabs/tabs.component';
import { PesquisaComponent } from "../pesquisas/pesquisa/pesquisa.component";
import { AgendaComponent } from '../agenda/agenda/agenda.component';

@Component({
  selector: 'app-escola',
  standalone: true,
  imports: [DashboardComponent, TabsComponent, AgendaComponent, PesquisaComponent],
  templateUrl: './escola.component.html',
  styleUrl: './escola.component.scss',
})
export class EscolaComponent {
  component!: string;

  tabs: Tab[] = [
    {
      icon: '',
      label: 'Dashboard',
      value: 'dashboard-escola',
      selected: false,
    }
  ];

  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService,
    private readonly escolaService: EscolaService
  ) {
    navbarService.setTitle('Escola');
    menuService.setSelected({
      icon: 'home_work',
      label: 'Escola',
      route: '/admin/Escola',
      checked: true,
    });

    this.escolaService.steps.subscribe((value) => {
      this.component = value;
    });
  }

  chosenTab(tab: string) {
    this.component = tab;
  }

  ngOnDestroy(): void {
    this.escolaService.steps.next('dashboard-escola');
  }
}
