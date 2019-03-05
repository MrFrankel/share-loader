import { Component } from '@angular/core';

@Component({
  selector: 'my-select',
  styles: [`
    
  `],
  template: `
    <div>
      <a routerLink="app1" routerLinkActive="active">internal component</a>
      <a routerLink="ext" routerLinkActive="active">external app</a>
      <router-outlet></router-outlet>
    </div>
  `
})
export class SelectComponent {
}