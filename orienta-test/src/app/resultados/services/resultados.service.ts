import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

export interface Resultado {
  id: number;
  test_id: number;
  carreraUniversidad: any;
}

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {
  private apiUrl = `${environment.apiUrl}/resultados`;

  constructor(private http: HttpClient) { }

  getResultadoByTestId(test_id: number): Observable<Resultado> {
    const url = `${this.apiUrl}/${test_id}`;
    return this.http.get<Resultado>(url);
  }
}
