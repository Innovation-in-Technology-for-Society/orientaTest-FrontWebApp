import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

interface Pregunta {
  id: number;
  enunciado: string;
}

interface TestPregunta {
  pregunta_id: Pregunta;
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getQuestions(testType: string, userId: number): Observable<TestPregunta[]> {
    const url = `${this.baseUrl}/test-preguntas/${userId}/${testType}`;
    return this.http.get<TestPregunta[]>(url);
  }
}
