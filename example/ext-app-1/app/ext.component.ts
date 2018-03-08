import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ext-comp',
  encapsulation: ViewEncapsulation.Native,
  styles: [`
    :host {
      display: block;
      border: 5px solid green;
      min-height: 90vh;
    }

    .btn {
      text-align: center;
      height: 100px;
      padding-top: 20px;
    }

    a {
      background: green;
      border-radius: 5px;
      cursor: pointer;
      padding: 10px 20px;
      color: white;
      text-decoration: none;
    }
  `],
  template: `
    <div>
      <div class="btn">
        <a uiSref="snake" uiSrefActive="active">Snake</a>
        <a uiSref="stopwatch" uiSrefActive="active">Stopwatch</a>
      </div>
      <ui-view></ui-view>
    </div>
  `
})
export class ExtComponent {
}