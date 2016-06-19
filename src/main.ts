import {enableProdMode} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

import {HelloAppComponent, environment} from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(HelloAppComponent);
