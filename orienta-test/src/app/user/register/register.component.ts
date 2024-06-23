import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SignUpService } from '../services/estudiante-request.service';
import { EstudianteRequest } from '../interfaces/estudiante-request.interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form: FormGroup;
  passwordVisible = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private signUpService: SignUpService
  ) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      correoElectronico: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      contrasenia: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  controlHasError(control: string, error: string) {
    return this.form.controls[control].hasError(error);
  }
  
  signup() {
    if (this.form.invalid) {
      return;
    }
    
    const signUpData: EstudianteRequest = this.form.value as EstudianteRequest;
    
    this.signUpService.signup(signUpData).subscribe({
      next: (response ) => {
        this.showSnackBar('Registro exitoso');
        this.router.navigate(['home']);
      },
      error: (error) => {
        console.error('Error en el registro:', error);
        this.showSnackBar('Error en el registro. Correo ya está siendo utilizado. Por favor, intenta de nuevo.');
      }
    });
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
    });
  }

}
