import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../services/animals.service';
import { CommonModule } from '@angular/common';
import { AnimalCardComponent } from './animal-card/animal-card.component';
import { ApiService } from '../services/api.service';
import { SpeciesService } from '../services/species.service';
import { FormsModule } from '@angular/forms';
import { NewAnimal } from '../models/new-animal.model';
import { Species } from '../models/spicies.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AnimalCardComponent, FormsModule],
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
  animalList: any[] = [];
  admin: boolean = false;
  openned: boolean = false;
  speciesList: Species[] = [];
  selectedSpecieIndex: number = 0
  newAnimal: NewAnimal = { name: '', color: '', sex: '',species: {commonName: '', latinName: ''}};

  constructor(
    private animalsService: AnimalsService, 
    private apiService: ApiService, 
    private speciesService: SpeciesService
  ) {}

  ngOnInit() {
    this.admin = this.apiService.isAdmin();
    this.getAllSpecies();

    this.animalsService.getAllAnimals().subscribe((data) => {
      console.log(data);
      this.animalList = data;
    });
  }

  open() {
    this.openned = !this.openned;
  }

  getAllSpecies() {
    this.speciesService.getAllSpecies().subscribe((data) => {
      console.log(data);
      this.speciesList = data;
    });
  }

  sendNewAnimal() {
    this.newAnimal.species = this.speciesList[this.selectedSpecieIndex];
    this.animalsService.newAnimal(this.newAnimal).subscribe((data) => {
      console.log(data);
      this.animalList.push(data);
      this.newAnimal = { name: '', color: '', sex: '', species: {commonName: '', latinName: ''} };
      this.openned = false;
    });
  }
}
