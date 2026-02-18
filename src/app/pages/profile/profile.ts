import { Component } from '@angular/core';
import {AuthCoreService} from '../../service/auth-core.service';
import {AsyncPipe, KeyValuePipe} from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [
    AsyncPipe,
    KeyValuePipe
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
  standalone: true
})
export class Profile {

  constructor(protected authService: AuthCoreService) {
  }

}
