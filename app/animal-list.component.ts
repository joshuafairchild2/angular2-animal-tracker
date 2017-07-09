import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list-component',
  template: `
    <h1>Filter by age:
      <select (change)="ageFilterChange($event.target.value)">
        <option value='allAnimals'>All animals</option>
        <option value='adultAnimals'>Adult animals (greater than 2 yrs old)</option>
        <option value='youngAnimals'>Young animals (2 yrs old or younger)</option>
      </select>
    </h1>
    <h1>Filter by species:
      <select (change)="speciesFilterChange($event.target.value)">
        <option value="allSpecies">All species</option>
        <option *ngFor='let species of childAnimalList | uniqueSpecies' [value]='species'>{{species}}</option>
      </select>
    </h1>
    <h1>Filter by animal name:
      <input [(ngModel)]='nameFilter'>
    </h1>
    <div *ngFor='let animal of childAnimalList | age:ageFilterType | species:speciesFilterType | name:nameFilter' class="well animal-card">
      <h1>{{animal.name}}</h1>
      <h3>{{animal.sex}} {{animal.species}}, age: {{animal.age}}</h3>
      <h3>Diet: {{animal.diet}}</h3>
      <h4>{{animal.name}} can be found in the {{animal.location}} exhibit. {{animal.pronoun}} has {{animal.caretakers}} caretakers, likes {{animal.likes}} and dislikes {{animal.dislikes}}</h4>
      <button (click)='editButtonClicked(animal)' class='btn'>Edit</button>
    </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() editAnimalSender = new EventEmitter();
  ageFilterType: string = 'allAnimals';
  speciesFilterType: string = 'allSpecies';
  nameFilter: string;

  editButtonClicked(animal: Animal): void {
    this.editAnimalSender.emit(animal);
  }

  ageFilterChange(filterOption: string): void {
    this.ageFilterType = filterOption;
  }

  speciesFilterChange(filterOption: string): void {
    this.speciesFilterType = filterOption;
  }
}
