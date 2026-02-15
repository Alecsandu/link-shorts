import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthCoreService {

  /*readonly isAuthenticated$ = this.authService.isAuthenticated$;
  readonly userProfile$ = this.authService.user$;*/

  constructor(private authService: AuthService) {
  }

  login() {
    this.authService.loginWithRedirect();
  }

  logout() {
    this.authService.logout({
      logoutParams: {
        returnTo: window.location.origin
      }
    });
  }

  isAuthenticated() {
    return this.authService.isAuthenticated$;
  }

  get userProfile() {
    return this.authService.user$;
  }

}
