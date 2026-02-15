import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection} from '@angular/core';
import {provideAuth0} from '@auth0/auth0-angular';
import {environment} from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideAuth0({
        domain: environment.authorizationServer,
        clientId: environment.clientId,
        authorizationParams: {
          redirect_uri: window.location.origin,
          //audience: 'YOUR_API_AUDIENCE', // optional (for APIs)
        },

        //cacheLocation: 'localstorage', // optional
        //useRefreshTokens: true          // optional
      }
    ),
  ]
};
