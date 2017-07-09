import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'uniqueSpecies',
  pure: false
})

export class UniqueSpeciesPipe implements PipeTransform {
  transform(input: Animal[]) {
    let output: string[] = [];
    for (let i: number = 0; i < input.length; i++) {
      if (output.indexOf(input[i].species) === -1) {
        output.push(input[i].species);
      }
    }
    return output;
  }
}
