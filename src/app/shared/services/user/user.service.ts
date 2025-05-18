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

  usuario = new BehaviorSubject<string>('');

  constructor(
    private readonly http: HttpClient
  ) {}

}
