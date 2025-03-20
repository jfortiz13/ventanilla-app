import { Component, Input, OnInit } from '@angular/core';
import { Constantes } from '../../constantes/constantes';
import { AlertaComponent } from '../alerta/alerta.component';

@Component({
  selector: 'app-titulo',
  imports: [AlertaComponent],
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css'],
  standalone: true
})
export class TituloComponent {
  nombreAplicacion = Constantes.NOMBRE_APLICACION;
  @Input() pantalla = Constantes.CADENA_VACIA;
}
