import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ResultadosModule } from './resultados/resultados.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TestModule } from './test/test.module';
import { SharedService } from './shared/services/shared.service';

import { AuthInterceptor } from './user/interceptor/auth.interceptor';
import { AuthService } from './user/services/auth.service';
import { BeneficioService } from './universidades/services/beneficio.service';
import { TestService } from './test/services/test.service';
import { UserService } from './user/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ResultadosModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TestModule
  ],
  providers: [
    provideAnimationsAsync(),
    AuthService,
    BeneficioService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    TestService,
    UserService,
    SharedService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
