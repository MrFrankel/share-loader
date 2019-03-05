import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {appModuleRoot} from './app.common.module'
import {appStates} from './app.states'

const appModule = appModuleRoot;
appModule.imports.push(CommonModule, RouterModule.forChild(appStates));

appModule.exports.push(RouterModule);
@NgModule(appModule)

export class AppModule {
}

