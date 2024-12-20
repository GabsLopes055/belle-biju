import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { alunoRequest, alunoResponse, listaAlunosResponse } from '../../../../models/alunos.interface';
import { environment } from '../../../../../environments/environment';
import { filtroDeBusca } from '../../../../models/filtro-busca.interface';
import { aluno } from './alunos.component';
const URL_BASE = `${environment.BACKEND_API}/alunos`;
@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  steps = new BehaviorSubject<aluno>({component: 'listar-alunos', idAluno: ''});
  fotoAluno = new BehaviorSubject<any>('');
  fotoAlunoDireito = new BehaviorSubject<any>('');
  fotoAlunoEsquerdo = new BehaviorSubject<any>('');

  private apiUrl = 'https://escola-ai-backend.technolimit.com.br'; // URL base do backend

  constructor(private http: HttpClient) {}

  // cadastrarAluno(alunoRequest: alunoRequest): Observable<alunoResponse> {
  //   return this.http.post<alunoResponse>(`${URL_BASE}`, alunoRequest);
  // }

  listarAlunos(filtro: filtroDeBusca) : Observable<listaAlunosResponse> {
    return this.http.get<listaAlunosResponse>(`${URL_BASE}?page=${filtro.page}&limit=${filtro.limit}`)
  }

  buscarAlunoPorId(idAluno: string) : Observable<alunoResponse> {
    return this.http.get<alunoResponse>(`${URL_BASE}/${idAluno}`)
  }

  cadastrarAluno(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/cadastro-aluno`, formData);
  }



}
