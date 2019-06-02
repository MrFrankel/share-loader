import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {appStates} from './app.states'
import {AppCommonModule} from "./app.common.module";
@NgModule({
  imports: [AppCommonModule, CommonModule, RouterModule.forChild(appStates)],
  declarations: [],
  bootstrap: [],
  entryComponents: [],
  providers: [],
  exports: [RouterModule]
})

export class AppModule {
}

