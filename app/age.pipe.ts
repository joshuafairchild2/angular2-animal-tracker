import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'age',
  pure: false
})

export class AgePipe implements PipeTransform {
  transform(input: Animal[], filter: string): Animal[] {
    if(filter === 'youngAnimals')
      return input.filter(animal => animal.age <= 2);

    else if(filter === 'adultAnimals')
      return input.filter(animal => animal.age > 2);

    else return input;
  }
}
