import { SpinnerService } from './../services/spinner.service';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { tap } from 'rxjs';
import { Constantes } from '../constantes/constantes';

let numeroPeticiones = Constantes.CERO;
export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {
  const spinnerService = inject(SpinnerService);

  if (spinnerService.deshabilitado()) {
    spinnerService.habilitar();
    return next(req);
  }

  numeroPeticiones++;
  if (numeroPeticiones === Constantes.UNO)
    spinnerService.abrirSpinner();
  return next(req).pipe(tap(() => {
    numeroPeticiones--;
    if (numeroPeticiones === Constantes.CERO)
      spinnerService.cerrarSpinner();
  }));
};
