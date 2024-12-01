import { Component } from '@angular/core';
import { NavbarService } from '../../../../../../shared/navbar/navbar.service';
import { MenuService } from '../../../../../../shared/menu/menu.service';
import { EscolaService } from '../../escola.service';
import { SelectComponent } from "../../../../../../shared/select/select.component";

@Component({
  selector: 'dashboard-escola',
  standalone: true,
  imports: [SelectComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {


}
