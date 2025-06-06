import { AfterViewInit, Component, OnInit } from '@angular/core';
import { InputComponent } from '../../shared/input/input.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../shared/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { InputIconComponent } from '../../shared/input-icon/input-icon.component';
import { MenuService } from '../../shared/menu/menu.service';
import { AuthService } from '../services/auth.service';
import { AuthenticationRequest } from '../../models/authentication.interface';
import { User } from '../../models/authentication.interface';
import { UserService } from '../../shared/services/user/user.service';
import { ToastService } from '../../shared/toast/toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  host: { class: 'main' },
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    InputComponent,
    ButtonComponent,
    RouterLink,
    InputIconComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class LoginComponent implements OnInit, AfterViewInit {
  campoObrigatorio: boolean = false;

  formLogin = new FormGroup({
    username: new FormControl('teste', Validators.required),
    password: new FormControl('teste', Validators.required),
  });

  constructor(
    private readonly router: Router,
    private readonly menuService: MenuService,
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly toastService: ToastService
  ) {}
  ngAfterViewInit(): void {
    this.menuService._menu.next([]);
  }

  ngOnInit(): void {}

  entrar() {
    if (this.formLogin.valid) {
      this.authService
        .logar(this.formLogin.value as AuthenticationRequest)
        .subscribe({
          next: (response) => {
            const payload = JSON.parse(atob(response.token.split('.')[1]));
            window.sessionStorage.setItem('token', response.token);
            window.sessionStorage.setItem('user', payload['sub']);
            this.router.navigate(['/admin']);
            this.menuService.updateMenu();
          },
          error: (erro) => {
            this.toastService.notify({
              message: 'Usuário ou senha incorreto',
              type: 'ERROR',
            });
          },
        });
    } else {
      this.campoObrigatorio = true;
      this.toastService.notify({
        message: 'Preencha o formulário corretamente !',
        type: 'WARNING',
      });
    }
  }
}
