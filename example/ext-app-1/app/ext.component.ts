import {Component} from '@angular/core';

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
      <button class="btn" uiSref="welcome" >Show Welcome</button>
      <ui-view></ui-view>
    </div>
  `
})
export class ExtComponent {
}