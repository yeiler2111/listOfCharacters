import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter-app.component.html',
  styleUrl: './counter-app.component.css'
})
export class CounterAppComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value
  }
  resetCounter(): void {
    this.counter = 0
  }

}
