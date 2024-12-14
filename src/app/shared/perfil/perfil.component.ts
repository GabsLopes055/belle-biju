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
    this.buscarUsuarioPorID();
  }

  buscarUsuarioPorID() {
    this.userService.buscarUserPorId().subscribe({
      next: (user) => {
        this.iniciais = user.firstName.charAt(0).toUpperCase();
        this.iniciais += user.lastName.charAt(0).toUpperCase();
      },
    });
  }
}
