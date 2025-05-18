import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userResponse } from '../../../../models/user.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
const URL_BASE = `${environment.BACKEND_API}/users`
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private readonly http: HttpClient
  ) { }

  buscarTodosUsuarios(): Observable<userResponse[]> {
    return this.http.get<userResponse[]>(URL_BASE);

  }
}
