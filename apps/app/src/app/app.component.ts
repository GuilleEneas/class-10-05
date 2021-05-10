import { Component } from '@angular/core';

@Component({
  selector: 'testing-intro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  value: string;

  add(a, b) {
    return a + b;
  }

  setValue(value: string): void {
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
}
