import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { spinnerInterceptor } from './compartido/interceptores/spinner.interceptor';
import { tokenInterceptor } from './compartido/interceptores/token.interceptor';
import { catchErrorInterceptor } from './compartido/interceptores/catch-error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        spinnerInterceptor, tokenInterceptor, catchErrorInterceptor
      ])
    ),
  ]
};
