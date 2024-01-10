import { Injectable } from '@angular/core';
import { Character } from '../interface/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({ providedIn: 'root' })
export class dbzService {

  title: string = 'Dbz personajes'
  public character: Character[] = [
    {
      id: uuid(),
      name: 'krilin',
      power: 10000
    }, {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9500
    }
  ]

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(), ...character
    }
    this.character.push(newCharacter)
  }

  deleteCharacterByiD(id: string): void {
    this.character = this.character.filter(character => character.id !== id)
  }

}
