import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadosRoutingModule } from './resultados-routing.module';
import { ResultadosComponent } from './resultados.component';
import { CarreraComponent } from './carrera/carrera.component';
import { UniversidadComponent } from './universidad/universidad.component';


@NgModule({
  declarations: [
    ResultadosComponent,
    CarreraComponent,
    UniversidadComponent
  ],
  imports: [
    CommonModule,
    ResultadosRoutingModule
  ]
})
export class ResultadosModule { }
