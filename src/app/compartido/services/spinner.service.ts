import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  public abrir = signal(false);
  public deshabilitado = signal(false);

  constructor() { }

  abrirSpinner() {
    this.abrir.set(true);
  }

  cerrarSpinner() {
    this.abrir.set(false);
  }

  deshabilitar() {
    this.deshabilitado.set(true);
  }

  habilitar() {
    this.deshabilitado.set(false);
  }
}
