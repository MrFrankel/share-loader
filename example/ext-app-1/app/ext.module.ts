import {NgModule} from '@angular/core'
import {UIRouterModule} from '@uirouter/angular'
import {BrowserModule} from '@angular/platform-browser'
import {ExtComponent} from './ext.component'
import {WelcomeComponent} from './welcome.component'
import {RouterModule} from '@angular/router'

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot([
    {
      path: 'welcome',
      component: WelcomeComponent
    }

  ])],
  declarations: [ExtComponent, WelcomeComponent],
  bootstrap: [ExtComponent],
  providers: [],
  entryComponents: []
})
export class ExtModule {
}