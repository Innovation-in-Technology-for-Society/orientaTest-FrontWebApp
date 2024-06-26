import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UniversidadBeneficioDTO } from '../interfaces/beneficio.interface';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BeneficioService {
  private apiUrl = `${environment.apiUrl}/universidades/beneficio-socioeconomico`;

  constructor(private http: HttpClient) {}

  getBeneficios(): Observable<UniversidadBeneficioDTO[]> {
    return this.http.get<UniversidadBeneficioDTO[]>(this.apiUrl);
  }   
}