import {NgModule} from '@angular/core'
import {ExtComponent} from './ext.component'
import {WelcomeComponent} from './welcome.component'
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  declarations: [ExtComponent, WelcomeComponent],
  bootstrap: [],
  entryComponents: [],
  providers: [],
  exports: [ExtComponent, WelcomeComponent]
})

export class AppCommonModule {}
