import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  steps = new BehaviorSubject<string>('listar-alunos');

  private apiUrl = 'https://escola-ai-backend.technolimit.com.br'; // URL base do backend

  constructor(private http: HttpClient) {}

  cadastrarAluno(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/cadastro-aluno`, formData);
  }


}
