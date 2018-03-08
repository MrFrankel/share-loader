import {NgModule} from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';
import {BrowserModule} from '@angular/platform-browser';
import {ExtComponent} from './ext.component';
import {WelcomeComponent} from './welcome.component';

@NgModule({
  imports: [BrowserModule, UIRouterModule.forRoot({
    states: [{
      name: 'home',
      url: '/home',
      component: ExtComponent,
    },
      {
        name: 'welcome',
        url: '/welcome',
        component: WelcomeComponent
      }
    ]
  })],
  declarations: [ExtComponent, WelcomeComponent],
  bootstrap: [ExtComponent],
  providers: [],
  entryComponents: []
})
export class ExtModule {
}