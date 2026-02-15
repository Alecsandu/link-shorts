import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {AuthCoreService} from '../../service/auth-core.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-app-core-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    AsyncPipe
  ],
  templateUrl: './app-core-header.component.html',
  styleUrl: './app-core-header.component.scss',
})
export class AppCoreHeaderComponent {

  constructor(protected authService: AuthCoreService) {
  }

}
