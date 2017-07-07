import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-edit-component',
  template: `
    <div *ngIf='childAnimalBeingEdited'>
      <div class='well'>
        <h2>Editing information for: {{childAnimalBeingEdited.name}}</h2>
        <div class='container'>
          <div class="row">
            <div class="col-md-6">
              <ul>
                <li>Species: {{childAnimalBeingEdited.species}}</li>
                <li>Age: {{childAnimalBeingEdited.age}}</li>
                <li>Diet: {{childAnimalBeingEdited.diet}}</li>
                <li>Sex: {{childAnimalBeingEdited.sex}}</li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul>
                <li>Exhibit/location: {{childAnimalBeingEdited.location}}</li>
                <li># of Caretakers: {{childAnimalBeingEdited.caretakers}}</li>
                <li>Likes: {{childAnimalBeingEdited.likes}}</li>
                <li>Dislikes: {{childAnimalBeingEdited.dislikes}}</li>
              </ul>
            </div>
          </div>
          <div class='row'>
            <div class='col-md-12'>
              <div class='form-group animal-edit-group'>
                <label>Animal name</label>
                <input #name [(ngModel)]='childAnimalBeingEdited.name' type="text" class="form-control">
              </div>
              <div class='form-group animal-edit-group'>
                <label>Age</label>
                <input #age [(ngModel)]='childAnimalBeingEdited.age' type="number" class="form-control">
              </div>
              <div class='form-group animal-edit-group'>
                <label>Number of caretakers</label>
                <input #caretakers [(ngModel)]='childAnimalBeingEdited.caretakers' type="number" class="form-control">
              </div>
              <button *ngIf="formIsValid(name.value, age.value, caretakers.value)" (click)='userDoneEditing()' class='btn'>Save changes</button>
              <h3 class="bg-danger"  id='edit-warning-text' *ngIf="!formIsValid(name.value, age.value, caretakers.value)">Fields cannot be left blank.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})

export class AnimalEditComponent {
  @Input() childAnimalBeingEdited: Animal;
  @Output() doneEditingSender = new EventEmitter();

  userDoneEditing(): void {
    this.doneEditingSender.emit()
  }

  formIsValid(name: string, age: string, caretakers: string) {
    return name && Number(age) && Number(caretakers);
  }
}
