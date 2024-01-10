import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';
import { NgFor, NgClass } from '@angular/common';
@Component({
  selector: 'dbz-list',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  title: string = 'desde la lista de dbz'
  @Input()
  public characterList: Character[] = [{
    name: 'trunks',
    power: 10
  }]

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  deleteItem(id: string): void {
    this.onDeleteId.emit(id)
  }


}
