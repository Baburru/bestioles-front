import { Routes } from '@angular/router';
import { AnimalsComponent } from './animals/animals.component';
import { SpeciesComponent } from './species/species.component';
import { LoginComponent } from './login/login.component';
import { AnimalDetailsComponent } from './animals/animal-details/animal-details.component';
import { PersonComponent } from './person/person.component';

export const routes: Routes = 
[{ path: '', component: LoginComponent }, 
{ path: 'animals', component: AnimalsComponent }, 
{ path: 'species', component: SpeciesComponent }, 
{ path: 'animals/:id', component: AnimalDetailsComponent },
{path: 'person', component: PersonComponent},];
