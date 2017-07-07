export class Animal {
  pronoun: string;
  constructor(public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string) {
    if (this.sex === 'Female')
      this.pronoun = 'She';

    else if (this.sex === 'Male')
      this.pronoun = 'He';
  }
}
