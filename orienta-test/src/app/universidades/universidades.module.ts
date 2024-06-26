import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversidadesRoutingModule } from './universidades-routing.module';
import { UniversidadComponent } from './universidad/universidad.component';


@NgModule({
  declarations: [
    UniversidadComponent
  ],
  imports: [
    CommonModule,
    UniversidadesRoutingModule
  ]
})
export class UniversidadesModule { }
