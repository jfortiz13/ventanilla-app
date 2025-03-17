import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Login } from '../modelos/login';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  private http = inject(HttpClient);
  private url = 'http://localhost:4200/api/autentificacion';
  constructor() { }

  iniciarSesion(login: Login) {
    return this.http.post(`${this.url}`, login);
  }
}
