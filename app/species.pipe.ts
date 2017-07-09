import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'species',
  pure: false
})

export class SpeciesPipe implements PipeTransform {
  transform(input: Animal[], filter: string): Animal[] {
    return filter === "allSpecies" ? input : input.filter(animal => animal.species === filter);
  }
}
