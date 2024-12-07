import { AsyncPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

import { Menu, MenuComponent } from './shared/menu/menu.component';
import { MenuService } from './shared/menu/menu.service';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    MenuComponent,
    NavbarComponent,
    AsyncPipe,
    HttpClientModule,
  ],
})
export class AppComponent implements OnInit {
  title = 'Escolar Ai';
  isMenu: Menu[] = [];

  constructor(
    private menuService: MenuService,
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.menuService._menu.subscribe((menu) => {
      this.isMenu = menu;
    });
  }
  ngOnInit() {}
}
