import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list-component',
  template: `
    <h1>All animals:</h1>
    <div *ngFor='let animal of childAnimalList' class="well animal-card">
      <h1>{{animal.name}}</h1>
      <h3>{{animal.sex}} {{animal.species}}, age: {{animal.age}}</h3>
      <h3>Diet: {{animal.diet}}</h3>
      <h4>{{animal.name}} can be found in the {{animal.location}} exhibit. {{animal.pronoun}} has {{animal.caretakers}} caretakers, likes {{animal.likes}} and dislikes {{animal.dislikes}}</h4>
    </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
}
