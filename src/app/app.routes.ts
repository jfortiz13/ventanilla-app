import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: "", redirectTo: "iniciar-sesion", pathMatch: "full" },
  { path: "iniciar-sesion",
    loadComponent: () => import('./autenticacion/login/login.component').then((m) => m.LoginComponent),
    data: { breadcrumb: 'Iniciar sesión' }
  },
  {
    path: "bienvenidos",
    loadComponent: () => import('./compartido/componentes/bienvenida/bienvenida.component').then(m => m.BienvenidaComponent),
    data: { breadcrumb: 'Bienvenidos' }
  },
  {
    path: "generacion-codigo",
    loadComponent: () => import('./ventanilla/generacion-folio/generacion-folio.component').then(m => m.GeneracionFolioComponent),
    data: { breadcrumb: 'Generación de código' }
  },
  { path: "**", redirectTo : "iniciar-sesion"},
];
