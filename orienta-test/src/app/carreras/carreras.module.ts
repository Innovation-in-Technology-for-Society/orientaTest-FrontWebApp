import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrerasRoutingModule } from './carreras-routing.module';
import { CarrerasComponent } from './carreras.component';
import { CarreraComponent } from './carrera/carrera.component';


@NgModule({
  declarations: [
    CarrerasComponent,
    CarreraComponent
  ],
  imports: [
    CommonModule,
    CarrerasRoutingModule
  ]
})
export class CarrerasModule { }
