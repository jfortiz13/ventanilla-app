import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Login } from '../modelos/login';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private url = environment.APIEndpoint + `/autentificacion`;
  constructor() { }

  iniciarSesion(login: Login) {
    return this.http.post(`${this.url}`, login);
  }

  cerrarSesion() {
      sessionStorage.clear();
      this.router.navigate(['/iniciar-sesion']);
  }
}
