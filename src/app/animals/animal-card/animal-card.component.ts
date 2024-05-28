import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalsService } from '../../services/animals.service';
import { Animal } from '../../models/animal.model';

@Component({
  selector: 'app-animal-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animal-card.component.html',
  styleUrl: './animal-card.component.scss'
})
export class AnimalCardComponent {

  constructor(private router: Router, private animalService: AnimalsService) { }

  @Input()
  animal!: Animal;

  redirectToDetails(animalId: number) {
    console.log(animalId);
    this.router.navigate([`/animals/${animalId}`]);
  }
}
