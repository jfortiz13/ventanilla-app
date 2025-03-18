import { AutentificacionService } from './../../services/autentificacion.service';
import { Component, inject } from '@angular/core';
import { Breadcrumb } from '../../modelos/breadcrumb';
import { Constantes } from '../../constantes/constantes';
import { ActivatedRoute, Event, NavigationEnd, Router, RouterModule } from '@angular/router';
import { distinctUntilChanged, filter, Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-encabezado',
  imports: [RouterModule, CommonModule],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.css'
})
export class EncabezadoComponent {
  public breadcrumbs: Breadcrumb[] = [];
  public nombre: string = Constantes.CADENA_VACIA;
  public rol: string | null = Constantes.CADENA_VACIA;
  public autentificacionService = inject(AutentificacionService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private unsubcribe$: Subject<void> = new Subject<void>();

  constructor() {
  }

  ngOnInit() {
    this.autentificacionService.getObservable().pipe( takeUntil(this.unsubcribe$)).subscribe(() => this.setHeader());

    this.router.events.pipe(
      filter((event: Event) => event instanceof NavigationEnd),
      distinctUntilChanged(),
      takeUntil(this.unsubcribe$)).subscribe(() => {
      this.breadcrumbs.push({ label : this.activatedRoute.snapshot.firstChild?.data['breadcrumb'] || ''});
    });
  }
  private setHeader(): void {
    this.nombre = this.autentificacionService.getUsername();
    this.rol = this.autentificacionService.rol;
  }

  public salir() {
    this.autentificacionService.cerrarSesion();
  }

  ngOnDestroy() {
    this.unsubcribe$.next();
    this.unsubcribe$.complete();
  }
}
