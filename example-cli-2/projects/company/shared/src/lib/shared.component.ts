import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';

@Component({
  selector: 'lib-shared',
  templateUrl: './shared.component.html'
})
export class SharedComponent {

  constructor(private counterService: SharedService) {
  }

  increment(): void {
    this.counterService.increment();
  }

  decrement(): void {
    this.counterService.decrement();
  }

  count(): Observable<number> {
    return this.counterService.count;
  }
}
