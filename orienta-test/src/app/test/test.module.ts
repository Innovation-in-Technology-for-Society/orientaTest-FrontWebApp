import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { VocacionalComponent } from './vocacional/vocacional.component';
import { AutopercepcionComponent } from './autopercepcion/autopercepcion.component';
import { QuestionService } from './services/question.service';

@NgModule({
  declarations: [
    VocacionalComponent,
    AutopercepcionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    QuestionService
  ]
})
export class TestModule { }
