import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EscolaService {

  steps = new BehaviorSubject<string>('dashboard-escola');


  constructor() { }
}
