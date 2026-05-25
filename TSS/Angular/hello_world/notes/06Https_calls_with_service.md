# Https calls

- provide Http module/providers in the app config using provideHttpClient()
- inject the HttpClient service
- use the http methods


first add http provider in **app.config.ts** :
```
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(), //this dude
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
```



