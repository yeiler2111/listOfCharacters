import { Component } from '@angular/core';
import { ListComponent } from './../../components/list/list.component'
import { AddCharacterComponent } from '../../components/add-character/add-character.component';
import { dbzService } from '../../service/dbz.service';
import { Character } from '../../interface/character.interface';
@Component({
  selector: 'app-dbz-page',
  standalone: true,
  templateUrl: './name.component.html',
  styleUrl: './name.component.css',
  imports: [ListComponent, AddCharacterComponent]
})
export class NameComponent {
  constructor(private dbzService: dbzService) {

  }

  getTitle():string{
    return this.dbzService.title
  }

  getCharacter():Character[]{
    return [...this.dbzService.character]
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterByiD(id)
  }

  onNewCharacter(character:Character):void{
    this.dbzService.addCharacter(character)
  }
}
