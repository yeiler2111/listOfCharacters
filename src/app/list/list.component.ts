import { Component } from '@angular/core';
import { Character } from '../dbz.module/interface/character.interface';

@Component({
  selector: 'app-dbz-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public characterList : Character[] = [{
    name:'trunks',
    power:10
  }]
}
