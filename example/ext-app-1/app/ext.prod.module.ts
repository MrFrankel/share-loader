import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExtComponent} from './ext.component';
import {WelcomeComponent} from './welcome.component';
import {RouterModule} from '@angular/router'


@NgModule({
  imports: [CommonModule, RouterModule.forChild(    [
    {
      path: '',
      component: ExtComponent
    },
    {
    path: 'welcome',
    component: WelcomeComponent
  }])],
  exports: [RouterModule],
  declarations: [ExtComponent, WelcomeComponent],
  entryComponents: []
})
export class ExtModule {
}
