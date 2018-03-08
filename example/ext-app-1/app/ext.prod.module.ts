import {NgModule} from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';
import {CommonModule} from '@angular/common';
import {ExtComponent} from './ext.component';
import {WelcomeComponent} from './welcome.component';


@NgModule({
  imports: [CommonModule, UIRouterModule.forChild({
    states: [
      {
        name: 'ext',
        url: '/ext',
        component: ExtComponent
      },
      {
        parent: 'ext',
        name: 'welcome',
        url: '/welcome',
        component: WelcomeComponent
      }
    ]
  })],
  declarations: [ExtComponent, WelcomeComponent],
  bootstrap: [],
  entryComponents: []
})
export class ExtModule {
}

window['ExtModule'] = ExtModule;