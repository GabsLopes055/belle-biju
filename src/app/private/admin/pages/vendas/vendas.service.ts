import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { vendasResponse } from '../../../../models/vendas.interface';
const URL_BASE = `${environment.BACKEND_API}/vendas`;
@Injectable({
  providedIn: 'root',
})
export class VendasService {
  constructor(private readonly http: HttpClient) {}

  listarVendas(): Observable<vendasResponse[]> {
    return this.http.get<vendasResponse[]>(URL_BASE);
  }

  salvarVenda(vendaRequest: any): Observable<vendasResponse[]> {
    return this.http.post<vendasResponse[]>(URL_BASE, vendaRequest);
  }

  deletarVenda(id: any): Observable<vendasResponse[]> {
    return this.http.delete<vendasResponse[]>(URL_BASE + '/' + id);
  }

  editarVenda(vendaRequest: any, idVenda: any): Observable<vendasResponse[]> {
    return this.http.put<vendasResponse[]>(
      URL_BASE + '/' + idVenda,
      vendaRequest
    );
  }
}
