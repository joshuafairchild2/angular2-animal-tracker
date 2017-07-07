import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-new-component',
  template: `
    <button (click)='addingAnimals = true' *ngIf='!addingAnimals' class='btn'>Add New Animal</button>
    <div *ngIf='addingAnimals' class='well'>
      <div class='form-group'>
        <label>Animal name</label>
        <input #name type="text" class="form-control">
      </div>
      <div class='form-group'>
        <label>Species</label>
        <input #species type="text" class="form-control">
      </div>
      <div class='form-group'>
        <label>Age</label>
        <input #age type="number" class="form-control">
      </div>
      <div class='form-group'>
      <label>Diet</label>
      <select #diet class='form-control'>
        <option value='Carnivore'>Carnivore</option>
        <option value='Herbivore'>Herbivore</option>
      </select>
      </div>
      <div class='form-group'>
        <label>Exhibit/location</label>
        <input #location type="text" class="form-control">
      </div>
      <div class='form-group'>
        <label>Number of caretakers</label>
        <input #caretakers type="number" class="form-control">
      </div>
      <div class='form-group'>
        <label>Sex</label>
        <select #sex class='form-control'>
          <option value='Female'>Female</option>
          <option value='Male'>Male</option>
        </select>
      </div>
      <div class='form-group'>
        <label>Likes</label>
        <input #likes type="text" class="form-control">
      </div>
      <div class='form-group'>
        <label>Dislikes</label>
        <input #dislikes type="text" class="form-control">
      </div>
      <button (click)='animalAdded(name.value, species.value, age.value, diet.value, location.value, caretakers.value, sex.value, likes.value, dislikes.value); name.value="";species.value="";age.value="";diet.value="";location.value="";caretakers.value="";sex.value="";likes.value="";dislikes.value=""' class="btn">Add Animal</button>
      <button (click)='addingAnimals = false' class='btn'>Cancel</button>
    </div>
  `
})

export class AnimalNewComponent {
  @Output() newAnimalSender = new EventEmitter();
  addingAnimals: boolean = false;

  animalAdded(name: string, species: string, age: string, diet: string, location: string, caretakers: string, sex: string, likes: string, dislikes: string): void {
    if(name && species && Number(age) && diet && location && Number(caretakers) && sex && likes && dislikes) {
      const newAnimal: Animal = new Animal(name, species, Number(age), diet, location, Number(caretakers), sex, likes, dislikes);
      this.newAnimalSender.emit(newAnimal);
      this.addingAnimals = false;
    }
  }
}
