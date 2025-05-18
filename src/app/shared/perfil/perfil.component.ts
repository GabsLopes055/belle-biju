import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'tgt-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss',
})
export class PerfilComponent implements OnInit {
  iniciais: string = '';
  @Input() nome: string = '';
  @Input() size: 'middle' | 'small' = 'middle';
  @Input() border: 'true' | 'none' = 'true';
  @Input() icon: boolean = false;

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    const user: any = sessionStorage.getItem('user');

    this.iniciais = user.substr(0, 1).toUpperCase();

  }
}
