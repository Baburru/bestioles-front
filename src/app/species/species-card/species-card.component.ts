import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Species } from '../../models/spicies.model';
import { SpeciesService } from '../../services/species.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-species-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './species-card.component.html',
  styleUrl: './species-card.component.scss'
})
export class SpeciesCardComponent {

  constructor(private speciesService: SpeciesService, private router:Router) { }

  @Input()
  specie!: Species;

  deleteSpecie(specieId: number) {
    console.log(specieId);
    this.speciesService.deleteSpeciesById(specieId).subscribe(() => {});
  }

}
