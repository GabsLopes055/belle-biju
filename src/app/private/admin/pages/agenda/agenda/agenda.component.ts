import { Component } from '@angular/core';
import { NavbarService } from '../../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../../shared/menu/menu.service';
import { CalendarComponent } from "../../../../../shared/calendar/calendar.component";

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [CalendarComponent],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss',
})
export class AgendaComponent {
  constructor(
    private readonly navbarService: NavbarService,
    private readonly menuService: MenuService
  ) {
    navbarService.setTitle('Agenda');
    menuService.setSelected({
      icon: 'calendar_month',
      label: 'Agenda',
      route: '/admin/agenda',
      checked: false,
    });
  }
}
