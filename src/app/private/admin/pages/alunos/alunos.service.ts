import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  steps = new BehaviorSubject<string>('listar-alunos');

  constructor() { }
}
