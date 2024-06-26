import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  answerQuestion(testId: number, questionId: number, value: number): Observable<any> {
    const url = `${this.baseUrl}/test-preguntas/${testId}/${questionId}/responder`;
    return this.http.post<any>(url, { valor: value });
  }
}
