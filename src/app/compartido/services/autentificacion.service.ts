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

  public get usuario(): any {
    // if (this._usuario != null) {
    //   return this._usuario;
    // } else if (this._usuario == null && sessionStorage.getItem('usuario') != null) {
    //   this._usuario = JSON.parse(sessionStorage.getItem('usuario')) as UsuarioAuth;
    //   return this._usuario;
    // }
    return null;
  }

  public get token(): string | null {
    // if (this._token != null) {
    //   return this._token;
    // } else if (this._token == null && sessionStorage.getItem('token') != null) {
    //   this._token = sessionStorage.getItem('token');
    //   return this._token;
    // }
    return null;
  }

  public getRol(): string | null {
    // try {
    //   let usuario = JSON.parse(sessionStorage.getItem('usuario'));
    //   if (usuario) {
    //     return usuario.authorities[0].authority.replace('ROLE_', '');
    //   } else {
    //     return null;
    //   }
    // } catch (e) {
      return null;
    // }
  }

  tieneRole(role: string): boolean {
    // const usuario = this.usuario;
    // try {
    //   if (usuario.authorities[0].authority == role) {
    //     return true;
    //   }
    // } catch (e) {
      return false;
    // }
  }

  hasRoles(roles: string[]): boolean {
    // const usuario = this.usuario;
    // try {
    //   for (let index = 0; index < roles.length; index++) {
    //     if (usuario.authorities[0].authority == roles[index]) {
    //       return true;
    //     }
    //   }
    // } catch (e) {
      return false;
    // }
  }
}
