import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styles: [`
    :host{
      background: green;
      display: block;
    }
  `],
  template: `
    <div class="jumbotron text-center">
      <h1>The App Lives!</h1>
      <p>{{ message }}</p>
      <my-select></my-select>
    </div>
  `
})
export class AppComponent {
  message = 'This is the sample message.';
}