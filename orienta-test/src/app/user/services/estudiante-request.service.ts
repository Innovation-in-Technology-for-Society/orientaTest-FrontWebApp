import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { EstudianteRequest } from '../interfaces/estudiante-request.interfaces';

import { EstudianteResponse } from '../interfaces/estudiante-response.interface';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  
  signup(signupRequest: EstudianteRequest) {
    const url = `${this.baseUrl}/estudiantes/registro`;
    return this.http.post<EstudianteResponse>(url, signupRequest);    
  }

}
