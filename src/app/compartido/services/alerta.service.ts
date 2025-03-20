import { Injectable, signal } from '@angular/core';
import { Alerta } from '../modelos/alerta';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  alert = signal<Alerta | null>(null);

  success(mensaje: string): void {
    this.setAlerta(mensaje, TipoAlerta.Success);
  }

  error(mensaje: string): void {
    this.setAlerta(mensaje, TipoAlerta.Error);
  }

  info(mensaje: string): void {
    this.setAlerta(mensaje, TipoAlerta.Info);
  }

  warning(mensaje: string): void {
    this.setAlerta(mensaje, TipoAlerta.Warning);
  }

  private setAlerta(mensaje: string, tipoAlerta: TipoAlerta): void {
    this.alert.set({ mensaje, tipoAlerta });
  }

  close(): void {
    this.alert.set(null);
  }

  get alerta() {
    return this.alert();
  }
}

export enum TipoAlerta {
  Success = 'alert-success',
  Error = 'alert-danger',
  Info = 'alert-info',
  Warning = 'alert-warning',
}
