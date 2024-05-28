import { Species } from "./spicies.model";

export interface NewAnimal {
    name: string;
    color: string;
    sex: string;
    species: Species;
}