import {NgModule} from '@angular/core'
import {AppComponent} from './app.component'
import {ExtComponent} from './ext.component'
import {WelcomeComponent} from './welcome.component'

export const appModuleRoot: NgModule = {
  imports: [],
  declarations: [AppComponent, ExtComponent, WelcomeComponent],
  bootstrap: [],
  providers: [],
  exports: []
};
