import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Species } from '../models/spicies.model';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {
  private endpoint = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getAllSpecies(): Observable<Species[]> {
    return this.http.get<Species[]>(this.endpoint + 'api/species')
  }

  deleteSpeciesById(id: number) {
    return this.http.delete(this.endpoint + 'api/species/' + id)
  }

}
