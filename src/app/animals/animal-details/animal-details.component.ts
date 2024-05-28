import { Component } from '@angular/core';
import { AnimalsService } from '../../services/animals.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-animal-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animal-details.component.html',
  styleUrl: './animal-details.component.scss'
})
export class AnimalDetailsComponent {


  constructor( private animalsService: AnimalsService, private route: ActivatedRoute, private router: Router, private apiService: ApiService){}

  animal: any
  admin: boolean = false;

  ngOnInit() {

    this.admin = this.apiService.isAdmin();
    let id = this.route.snapshot.paramMap.get('id')
    if(id){
    this.animalsService.getAnimalById(parseInt(id)).subscribe((data) => {
      console.log(data);
      this.animal = data;
    });
    }
  }

  deleteAnimal(animalId: number) {
    this.animalsService.deleteById(animalId).subscribe(() => {
      this.router.navigate(['/animals']);
    });
  }

}
