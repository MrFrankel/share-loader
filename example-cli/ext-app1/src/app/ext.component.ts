import {Component, ViewEncapsulation} from '@angular/core'

@Component({
  selector: 'ext-comp',
  encapsulation: ViewEncapsulation.Native,
  styles: [`
    :host {
      display: block;
      border: 5px solid red;
      min-height: 90vh;
      background: red;
    }

    .btn {
      background: purple;
      color: white;
      text-align: center;
      height: 30px;
    }
  `],
  template: `
    <div>
      <button class="btn" routerLink="welcome" routerLinkActive="active" >Show Welcome</button>
      <router-outlet></router-outlet>
    </div>
  `
})
export class ExtComponent {
}
