import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'uniqueSpecies',
  pure: false
})

export class UniqueSpeciesPipe implements PipeTransform {
  transform(input: Animal[]) {
    const speciesArr: string[] = input.map(animal => animal.species);
    return Array.from(new Set(speciesArr));
  }
}
