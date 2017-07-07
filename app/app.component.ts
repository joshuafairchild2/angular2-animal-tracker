import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <h1 class='jumbotron text-center'>Local Zoo</h1>
  <div class="container">
    <animal-new-component (newAnimalSender)='addAnimal($event)'></animal-new-component>
    <animal-list-component [childAnimalList]='masterAnimalList'></animal-list-component>
  </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'cool shade', 'loud noises'),
    new Animal('Ocelot', 'Babou', 4, 'Carnivore', 'Tropical Ran Forest', 6, 'Male', 'laying in the sunshine', 'toys that are not rope-based'),
    new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'Female', 'delicate roots and leaves', 'loud noises')
  ];

  addAnimal(animal: Animal) {
    this.masterAnimalList.push(animal);
  }
}
