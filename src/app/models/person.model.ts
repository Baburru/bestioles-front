import { Animal } from "./animal.model";
import { Species } from "./spicies.model";

export interface Person {
    id: number
    age: number;
    firstName: string;
    lastName: string;
    animals: Animal[];    
}