import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversidadComponent } from '../universidades/universidad/universidad.component';
import { BeneficioSocioeconomicoComponent } from './beneficio-socioeconomico/beneficio-socioeconomico.component';

const routes: Routes = [
  { path: '', component: UniversidadComponent },
  { path: 'beneficio-socioeconomico', component: BeneficioSocioeconomicoComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversidadesRoutingModule { }
