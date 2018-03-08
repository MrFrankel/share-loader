import { Component } from '@angular/core';

@Component({
  selector: 'my-select',
  styles: [`
    
  `],
  template: `
    <div>
      <a uiSref="app1" uiSrefActive="active">internal component</a>
      <a uiSref="ext" uiSrefActive="active">external app</a>
      <ui-view></ui-view>
    </div>
  `
})
export class SelectComponent {
}