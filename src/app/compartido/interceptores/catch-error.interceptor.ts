import { AutentificacionService } from './../services/autentificacion.service';
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';

export const catchErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const autentificacionService = inject(AutentificacionService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status == 403) {
        autentificacionService.cerrarSesion();
      }
      return throwError(() => error);
    })
  );
};
