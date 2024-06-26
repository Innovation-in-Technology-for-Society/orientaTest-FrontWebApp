import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getLoggedInUserId(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/auth/user/id`);
  }
}