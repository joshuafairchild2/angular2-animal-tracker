import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'name',
  pure: false
})

export class NamePipe implements PipeTransform {
  transform(input: Animal[], filter: string): Animal[] {
    return filter ? input.filter(animal => animal.name.toLowerCase() === filter.toLowerCase()) : input;
  }
}
