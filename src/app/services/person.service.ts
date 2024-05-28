import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private endpoint = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getAllPerson(): Observable<Person[]> {
    return this.http.get<Person[]>(this.endpoint + 'api/person')
  }
}
