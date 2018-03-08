import {NgModule} from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';
import {ExtComponent} from './games.component';
import {SnakeComponent} from './snake/snake.component';
import {CommonModule} from '@angular/common';
import {BestScoreManager} from './snake/snake.storage.service';
import {StopwatchComponent} from './stopwatch/stopwatch';
import {StopwatchService} from './stopwatch/stopwatch.service';

@NgModule({
  imports: [CommonModule, UIRouterModule.forChild({
    states: [
      {
        name: 'marketer.games.all',
        url: '/games/home',
        views:{
          'content': {
            component: ExtComponent
          }
        }
      },
      {
        parent: 'marketer.games.all',
        name: 'snake',
        url: '/snake',
        component: SnakeComponent
      },
      {
        parent: 'marketer.games.all',
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
export class GamesModule {
}

window['GamesModule'] = GamesModule;