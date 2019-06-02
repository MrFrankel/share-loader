import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {AppCommonModule} from './app.common.module'
import {appStates} from './app.states'
import {CommonModule} from "@angular/common";
import {ExtComponent} from "./ext.component";

@NgModule({
  imports: [AppCommonModule, CommonModule, RouterModule.forRoot(appStates)],
  declarations: [],
  bootstrap: [ExtComponent],
  entryComponents: [],
  providers: [],
  exports: [RouterModule]
})

export class AppModule {}
