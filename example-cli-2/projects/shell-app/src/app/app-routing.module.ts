import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadScript } from './script-loader';

const routes: Routes = [
  {
    path: 'external',
    loadChildren: () => loadScript('http://localhost:4300/main.js', 'extapp', 'AppModule')
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
