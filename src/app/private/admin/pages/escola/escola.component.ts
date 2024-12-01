import { Component } from '@angular/core';
import { NavbarService } from '../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../shared/menu/menu.service';
import { EscolaService } from './escola.service';
import { DashboardComponent } from './aba-dashboard/dashboard/dashboard.component';
import { Tab, TabsComponent } from '../../../../shared/tabs/tabs.component';
import { AgendaComponent } from "./aba-agenda/agenda/agenda.component";
import { PesquisaComponent } from "./aba-pesquisa/pesquisa/pesquisa.component";

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
    },
    {
      icon: '',
      label: 'Agenda',
      value: 'agenda-escola',
      selected: false,
    },
    {
      icon: '',
      label: 'Pesquisa',
      value: 'pesquisa-escola',
      selected: false,
    },
  ];

  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService,
    private readonly escolaService: EscolaService
  ) {
    navbarService.setTitle('Escola');
    menuService.setSelected({
      icon: 'school',
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
