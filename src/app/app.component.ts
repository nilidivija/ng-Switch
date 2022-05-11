import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  choice: number;

  constructor() {
    this.choice = 1;
  }
  nextChoice() {
    this.choice += 1;
    if (this.choice > 5) {
      this.choice = 1;
    }
  }
}
