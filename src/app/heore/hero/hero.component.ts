import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hero-component',
  standalone: true,
  imports: [NgIf],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'iroman'
  public age: number = 15

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero(): void {
    this.name = 'Spiderman'
  }
  changeAge(): void {
    this.age = 45
  }

  resetForm() {
    this.name = 'iroman'
    this.age = 15

    // document.querySelectorAll('h1')!.forEach((element) => {
    //   element.innerHTML = '<h1>desde angular</h1>'
    // });;
  }

}
