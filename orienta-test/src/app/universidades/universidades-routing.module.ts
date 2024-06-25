import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversidadComponent } from '../universidades/universidad/universidad.component';

const routes: Routes = [
  { path: '', component: UniversidadComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversidadesRoutingModule { }
