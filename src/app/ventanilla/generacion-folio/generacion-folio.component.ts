import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertaService } from '../../compartido/services/alerta.service';
import { TituloComponent } from './../../compartido/componentes/titulo/titulo.component';
import { Component, OnInit, inject } from '@angular/core';
import { Constantes } from '../../compartido/constantes/constantes';

@Component({
  selector: 'app-generacion-folio',
  imports: [TituloComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './generacion-folio.component.html',
  styleUrls: ['./generacion-folio.component.css'],
  standalone: true
})
export class GeneracionFolioComponent implements OnInit {
  pantalla = 'Generación de código';
  private alertaService = inject(AlertaService);
  claveTecnico: FormControl;
  constructor() {
    this.claveTecnico = new FormControl(Constantes.CADENA_VACIA, Validators.required);
  }

  ngOnInit() {
  }

  buscarTecnico(): void {
    if (this.claveTecnico.invalid) {
      this.alertaService.error('Es necesario ingresar la clave del técnico');
    }
  }

  open(): void {
    this.alertaService.success('Este condición es un mensaje con <strong>negrita</strong> en algunas palabras.')
  }

}
