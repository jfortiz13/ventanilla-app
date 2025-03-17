import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./compartido/componentes/menu/menu.component";
import { EncabezadoComponent } from "./compartido/componentes/encabezado/encabezado.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, EncabezadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ventanilla-app';
}
