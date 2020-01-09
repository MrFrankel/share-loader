import { Component } from '@angular/core';
import { SharedService } from '@company/shared';

@Component({
  selector: 'shell-app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  constructor(private counterService: SharedService) {
  }

  reset() {
    this.counterService.reset();
  }
}
