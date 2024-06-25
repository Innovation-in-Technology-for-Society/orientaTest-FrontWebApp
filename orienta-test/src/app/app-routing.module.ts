import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'carreras', loadChildren: () => import('./carreras/carreras.module').then(m => m.CarrerasModule) },
  { path: 'resultados', loadChildren: () => import('./resultados/resultados.module').then(m => m.ResultadosModule) },
  { path: 'universidades', loadChildren: () => import('./universidades/universidades.module').then(m => m.UniversidadesModule) }, 
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
