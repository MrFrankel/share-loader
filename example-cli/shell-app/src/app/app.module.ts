import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SelectComponent} from './select.component';
import {APP_STATES} from './app.states';
import {App1Component} from './app1.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [BrowserModule,  ReactiveFormsModule, RouterModule.forRoot(APP_STATES)],
  declarations: [AppComponent, SelectComponent, App1Component],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
