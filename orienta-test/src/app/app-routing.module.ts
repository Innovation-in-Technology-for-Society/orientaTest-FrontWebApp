import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VocacionalComponent } from './test/vocacional/vocacional.component';
import { AutopercepcionComponent } from './test/autopercepcion/autopercepcion.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }, 
  { path: 'home', component: HomeComponent},
  { path: 'test/vocacional', component: VocacionalComponent },
  { path: 'test/autopercepcion', component: AutopercepcionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
