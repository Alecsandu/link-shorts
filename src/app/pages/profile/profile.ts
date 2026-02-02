import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [
    RouterLink
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
  standalone: true
})
export class Profile {

}
