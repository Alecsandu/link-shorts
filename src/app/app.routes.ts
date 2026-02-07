import { Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {Profile} from './pages/profile/profile';
import {HomeComponent} from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: Profile
  },
  {
    path: 'home',
    component: HomeComponent
  }
];
