import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection} from '@angular/core';
import {AuthConfig, provideAuth0} from '@auth0/auth0-angular';
import {environment} from '../environments/environment';

const authAppConfig: AuthConfig = {
  domain: environment.authorizationServer,
  clientId: environment.clientId,
  authorizationParams: {
    redirect_uri: window.location.origin,
    //audience: 'YOUR_API_AUDIENCE',
  },

  cacheLocation: 'localstorage',
  useRefreshTokens: true
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideAuth0(authAppConfig),
  ]
};
