import { Component } from '@angular/core';
import { OneService } from './one.service';

@Component({
  selector: 'testing-intro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  getThingsFromService() {
    return this.oneService.getThings();
  }

  constructor(private oneService: OneService) {}
}
