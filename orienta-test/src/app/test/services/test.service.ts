import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Método para obtener el test actual del estudiante
  getCurrentTest(estudianteId: number): Observable<any> {
    const url = `${this.baseUrl}/tests/${estudianteId}`;
    return this.http.get<any>(url);
  }

  // Método para iniciar un nuevo test
  iniciarTest(estudianteId: number): Observable<any> {
    const url = `${this.baseUrl}/tests`;
    const body = { estudiante_id: estudianteId };
    return this.http.post<any>(url, body);
  }

  // Método para generar el resultado del test
  generateResultado(testId: number): Observable<any> {
    const url = `${this.baseUrl}/tests/${testId}/resultado`;
    return this.http.post<any>(url, {});
  }
}
