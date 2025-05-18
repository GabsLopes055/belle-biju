import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AuthenticationRequest, AuthResponse } from '../../models/authentication.interface';

const URL_BASE = `${environment.BACKEND_API}/authentication/login`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) { }

  logar(authenticationRequest: AuthenticationRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${URL_BASE}`, authenticationRequest);
  }

}
