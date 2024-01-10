import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'dbz-add-character',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter()
  public model: Character = {
    name: '',
    power: 0
  }
  public listOfCharacter: Character[] = []

  addCharacterItems(): void {

    if (this.model.name.length === 0) return

    const Object: Character = {
      name: this.model.name,
      power: this.model.power
    }

    this.onNewCharacter.emit(Object)

    this.model.name = ''
    this.model.power = 0



  }
}
