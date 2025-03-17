import { Routes } from '@angular/router';
import { LoginComponent } from './autenticacion/login/login.component';

export const routes: Routes = [
  { path: "", redirectTo: "iniciar-sesion", pathMatch: "full" },
  { path: "iniciar-sesion", component: LoginComponent },
  { path: "**", redirectTo : "iniciar-sesion"},
];
