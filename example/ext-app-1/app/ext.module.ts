import {NgModule} from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';
import {BrowserModule} from '@angular/platform-browser';
import {ExtComponent} from './games.component';
import {SnakeComponent} from './snake/snake.component';
import {BestScoreManager} from './snake/snake.storage.service';
import {StopwatchComponent} from './stopwatch/stopwatch';
import {StopwatchService} from './stopwatch/stopwatch.service';

@NgModule({
  imports: [BrowserModule, UIRouterModule.forRoot({
    states: [{
      name: 'home',
      url: '/home',
      component: ExtComponent
    },
      {
        name: 'snake',
        url: '/snake',
        component: SnakeComponent
      },
      {
        name: 'stopwatch',
        url: '/stopwatch',
        component: StopwatchComponent
      },
    ]
  })],
  declarations: [ExtComponent, SnakeComponent, StopwatchComponent],
  bootstrap: [ExtComponent],
  providers: [BestScoreManager, StopwatchService],
  entryComponents: []
})
export class ExtModule {}