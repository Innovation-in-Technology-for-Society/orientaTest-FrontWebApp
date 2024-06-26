// navbar.component.ts

import { Component } from '@angular/core';
import { UserService } from '../../user/services/user.service';
import { TestService } from '../../test/services/test.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private userService: UserService, private testService: TestService) { }

  iniciarTest(): void {
    this.userService.getLoggedInUserId().subscribe(
      userId => {
        this.testService.iniciarTest(userId).subscribe(
          response => {
            console.log('Test iniciado correctamente:', response);
            // Aquí podrías manejar la respuesta del test iniciado si es necesario
          },
          error => {
            console.error('Error al iniciar el test:', error);

          }
        );
      },
      error => {
        console.error('Error al obtener el ID del estudiante logueado:', error);
      }
    );
  }

}
