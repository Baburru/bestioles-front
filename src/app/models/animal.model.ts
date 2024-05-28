import { Person } from "./person.model";
import { Species } from "./spicies.model";

export interface Animal {
    id: number
    name: string;
    color: string;
    sex: string;
    species: Species;
    person: Person[]
}