import { Constantes } from './../constantes/constantes';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Login } from '../modelos/login';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { ResponseToken } from '../modelos/response-token';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private _usuario: Usuario | null = null;
  private _token: string | null = null;
  private _rol: string | null = null;
  public logeado: Subject<void> = new Subject<any>();
  private url = environment.APIEndpoint + `/autentificacion`;

  constructor() { }

  public iniciarSesion(login: Login): Observable<ResponseToken> {
    // return this.http.post<ResponseToken>(`${this.url}`, login);
    const responseToken = {
      token: '1234567890',
      usuario: {
        id: 1,
        usuario: 'Juan',
        personaId: 1,
        authorities: [{
          authority: 'VENTANILLA'
        }]
      } as Usuario
    } as ResponseToken;
    return of(responseToken);
  }

  getObservable() {
    return this.logeado.asObservable();
  }

  next() {
    this.logeado.next();
  }
  public cerrarSesion() {
      sessionStorage.clear();
      this.router.navigate(['/iniciar-sesion']);
  }

  public storage(responseToken: ResponseToken) {
    const { token, usuario } = responseToken;
    this._token = token;
    this._usuario = usuario;
    this._rol = usuario.authorities.at(0)?.authority || null;
    sessionStorage.setItem('token', this._token);
    sessionStorage.setItem('usuario', JSON.stringify(this._usuario));
    sessionStorage.setItem('rol', this._rol ? this._rol : Constantes.CADENA_VACIA);

  }


  public get usuario(): Usuario | null {
    if (this._usuario) return this._usuario;
    else if (!this._usuario && sessionStorage.getItem(Constantes.USUARIO) != Constantes.NULL) {
      this._usuario = JSON.parse(sessionStorage.getItem(Constantes.USUARIO)!) as Usuario;
      return this._usuario;
    }
    return null;
  }

  public get token(): string | null {
    if (this._token) return this._token;
    else if (!this._token && sessionStorage.getItem(Constantes.TOKEN) != Constantes.NULL) {
      this._token = sessionStorage.getItem(Constantes.TOKEN);
      return this._token;
    }
    return null;
  }

  public get rol(): string | null {
    if (this._rol) return this._rol;
    else if (!this._rol && sessionStorage.getItem(Constantes.ROL) != Constantes.NULL) {
      this._rol = sessionStorage.getItem(Constantes.ROL);
      return this._rol;
    }
    return null;
  }

  getUsername() {
    const usuario = JSON.parse(sessionStorage.getItem(Constantes.USUARIO)!) as Usuario;
    if (usuario) return usuario.usuario;
    return Constantes.CADENA_VACIA;
  }
  tieneRole(rol: string): boolean {
    return this._rol === rol;
  }

  tieneRoles(roles: string[]): boolean {
    return roles.find(rol => rol === this._rol) ? true : false;
  }

  esAutenticado(): boolean {
    return sessionStorage.getItem(Constantes.TOKEN) != Constantes.NULL;
  }
}
