import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-new-component',
  template: `
  <button (click)='addingAnimals = true' *ngIf='!addingAnimals' class='btn'>Add New Animal</button>
  <div *ngIf='addingAnimals'>
    <label>Animal name</label>
    <input #name type="text" class="form-control form-group">
    <label>Species</label>
    <input #species type="text" class="form-control form-group">
    <label>Age</label>
    <input #age type="number" class="form-control form-group">
    <label>Diet</label>
    <input #diet type="text" class="form-control form-group">
    <label>Exhibit/location</label>
    <input #location type="text" class="form-control form-group">
    <label>Number of caretakers</label>
    <input #caretakers type="number" class="form-control form-group">
    <label>Sex</label>
    <select #sex class='form-control form-group'>
      <option value='Female'>Female</option>
      <option value='Male'>Male</option>
    </select>
    <label>Likes</label>
    <input #likes type="text" class="form-control form-group">
    <label>Dislikes</label>
    <input #dislikes type="text" class="form-control form-group">
    <button (click)='animalAdded(name.value, species.value, age.value, diet.value, location.value, caretakers.value, sex.value, likes.value, dislikes.value); addingAnimals = false;name.value="";species.value="";age.value="";diet.value="";location.value="";caretakers.value="";sex.value="";likes.value="";dislikes.value=""' class="btn">Add Animal</button>
    <button (click)='addingAnimals = false' class='btn'>Cancel</button>
  </div>
  `
})

export class AnimalNewComponent {
  @Output() newAnimalSender = new EventEmitter();
  addingAnimals = false;

  animalAdded(name: string, species: string, age: string, diet: string, location: string, caretakers: string, sex: string, likes: string, dislikes: string) {
    const newAnimal: Animal = new Animal(name, species, Number(age), diet, location, Number(caretakers), sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimal);
  }
}
