import { Component, OnInit, inject } from '@angular/core';
import { AlertaService } from '../../services/alerta.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alerta',
  imports: [CommonModule],
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css'],
  standalone: true
})
export class AlertaComponent {
  alertaService = inject(AlertaService)
}
