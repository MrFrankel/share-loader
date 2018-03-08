import { Component } from '@angular/core';

@Component({
  selector: 'ext-welcome',
  styles: [`
    :host{
      display: block;
      background: blue;
      color: white;
    }
    
  `],
  template: `
    <div>
      <h1><span>{{ message }}</span></h1>     
    </div>
  `
})
export class WelcomeComponent {
  message = 'this is a nested routed external component';
}