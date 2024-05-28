import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private endpoint = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  Auth(loginInfos: any): Observable<any> {
    console.log(loginInfos);
    return this.http.post(this.endpoint + 'auth', loginInfos)
  }

  getAuthToken(): string | null {
    return localStorage.getItem('authToken');
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }

  isAdmin(): boolean {
    let jwt: string = localStorage.getItem('authToken') || '';
    console.log(jwtDecode(jwt))
    if (jwtDecode(jwt).sub === 'admin') {
      return true;
    } else {
      return false;
    }
  }

  isLogged(): boolean {
    let jwt: string = localStorage.getItem('authToken') || '';
    if (jwtDecode(jwt).sub) {
      return true;
    } else {
      return false;
    }
  }
}
