import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeciesCardComponent } from './species-card/species-card.component';
import { SpeciesService } from '../services/species.service';
import { Species } from '../models/spicies.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SpeciesCardComponent],
  templateUrl: './species.component.html',
  styleUrl: './species.component.scss'
})
export class SpeciesComponent implements OnInit{

  constructor( private speciesService: SpeciesService){}

  speciesList: Species[] = []

  ngOnInit() {
    this.speciesService.getAllSpecies().subscribe((data) => {
      console.log(data);
      this.speciesList = data;
    });
  }
}
