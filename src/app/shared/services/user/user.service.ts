import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../../models/authentication.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

const URL = environment.BACKEND_API

@Injectable({
  providedIn: 'root',
})
export class UserService {

  usuario = new BehaviorSubject<User | undefined>(undefined);
  usuarioInstance!: User;

  constructor(
    private readonly http: HttpClient
  ) {}

  get user(): User | null {

    const token = window.sessionStorage.getItem('token');

    if (token) {
      const tokenPayload = token.split('.')[1];
      const payload = JSON.parse(atob(tokenPayload));
      // console.log(payload)
      const usuario: User = payload['usuario'];
      return usuario;
    }
    return null;
  }

  buscarUserPorId() :Observable<User> {
    return this.http.get<User>(`${URL}/auth/me`);
  }
}
