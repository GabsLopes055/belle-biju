import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  steps = new BehaviorSubject<string>('listar-colaboradores');

  constructor() { }
}
