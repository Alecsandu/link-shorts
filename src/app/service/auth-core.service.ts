import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthCoreService {

  readonly isAuthenticated$;
  readonly userProfile$;

  constructor(private authService: AuthService) {
    this.isAuthenticated$ = this.authService.isAuthenticated$;
    this.userProfile$ = this.authService.user$;
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

}
