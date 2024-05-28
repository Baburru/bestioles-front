import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../models/animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  private endpoint = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getAllAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.endpoint + 'api/animal')
  }

  getAnimalById(id: number): Observable<Animal> {
    return this.http.get<Animal>(this.endpoint + 'api/animal/' + id)
  }

  deleteById(id: number) {
    return this.http.delete(this.endpoint + 'api/animal/' + id)
  }

  newAnimal(animal: any): Observable<Animal> {
    return this.http.post<Animal>(this.endpoint + 'api/animal', animal)
  }

  updateAnimal(animal: any): Observable<Animal> {
    return this.http.put<Animal>(this.endpoint + 'api/animal/' + animal.id, animal)
  }
}
