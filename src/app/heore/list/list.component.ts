import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-list-component',
  standalone: true,
  imports: [NgFor ,NgIf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public Heroes: string[] = ['Ironman', 'Hulk', 'Spiderman', 'She hulk', 'Thor']
  public deletedHero? :string
  deleteElement() : void {
    this.deletedHero = this.Heroes.pop();

  }

}
