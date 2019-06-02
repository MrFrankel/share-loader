import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.external.module';
try {
  platformBrowserDynamic().bootstrapModule(AppModule);
}
catch(e){
  console.log('ok')
}
