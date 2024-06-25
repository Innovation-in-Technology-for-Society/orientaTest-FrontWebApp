import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/resultados', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'resultados', loadChildren: () => import('./resultados/resultados.module').then(m => m.ResultadosModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
