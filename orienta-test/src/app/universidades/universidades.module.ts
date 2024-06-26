import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversidadesRoutingModule } from './universidades-routing.module';
import { UniversidadComponent } from './universidad/universidad.component';
import { BeneficioSocioeconomicoComponent } from './beneficio-socioeconomico/beneficio-socioeconomico.component';


@NgModule({
  declarations: [
    UniversidadComponent,
    BeneficioSocioeconomicoComponent
  ],
  imports: [
    CommonModule,
    UniversidadesRoutingModule
  ]
})
export class UniversidadesModule { }
