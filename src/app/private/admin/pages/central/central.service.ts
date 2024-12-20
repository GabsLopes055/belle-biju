import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CentralService {

  atualizarLista = new BehaviorSubject<any>('');

  constructor(private readonly http: HttpClient) {}

  reset(): Observable<any> {
    return this.http.get<any>('https://escola-ai-backend.technolimit.com.br/reset');
  }
}
