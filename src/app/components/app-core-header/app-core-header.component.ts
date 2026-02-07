import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-app-core-header',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app-core-header.component.html',
  styleUrl: './app-core-header.component.scss',
})
export class AppCoreHeaderComponent {

}
