import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person.model';
import { PersonService } from '../services/person.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent implements OnInit {

constructor(private personService: PersonService) { }

personList: Person[]= []

ngOnInit() {
  this.personService.getAllPerson().subscribe((data) => {
    console.log(data);
    this.personList = data;
  });
}

}
