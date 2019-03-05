import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {appModuleRoot} from './app.common.module'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component'
import {appStates} from './app.states'

const appModule = appModuleRoot;
appModule.imports.push(BrowserModule, RouterModule.forRoot(appStates));
appModule.bootstrap.push(AppComponent);

@NgModule(appModule)

export class AppModule {
}

