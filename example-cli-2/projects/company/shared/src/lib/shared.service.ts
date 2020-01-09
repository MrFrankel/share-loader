import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class SharedService {
  private readonly countingSubject = new ReplaySubject<number>();
  private currentValue = 0;

  constructor() {
    this.countingSubject.next(0);
  }

  get count(): Observable<number> {
    return this.countingSubject;
  }

  increment(): void {
    this.currentValue++;
    this.countingSubject.next(this.currentValue);
  }

  decrement(): void {
    this.currentValue--;
    this.countingSubject.next(this.currentValue);
  }

  reset(): void {
    this.currentValue = 0;
    this.countingSubject.next(0);
  }
}
