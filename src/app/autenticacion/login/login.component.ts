import { CommonModule } from '@angular/common';
import { Component, inject, signal, } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AutentificacionService } from '../../compartido/services/autentificacion.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //Providers
  private fb = inject(FormBuilder);
  private autenticacionService = inject(AutentificacionService);
  private router = inject(Router);

  public loginForm: FormGroup;
  public required = signal(false);
  public campoTexto = signal(false);

  constructor() {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      contrasenia: ['', Validators.required]
    });
  }

  onTipoCampo() {
    this.campoTexto.update(value => !value);
  }

  iniciarSesion() {
    if (this.loginForm.invalid) {
      this.required.set(true);
    } else {
      this.autenticacionService.iniciarSesion(this.loginForm.value).subscribe({
        next: (response) => {
          this.autenticacionService.storage(response);
          this.required.set(false);
          this.router.navigate(['/bienvenidos']);
          this.autenticacionService.next();
        },
        error: (error) => {
          this.required.set(false);
          console.error(error)
        }
      })
    }
  }
}
