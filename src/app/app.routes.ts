import {Routes} from '@angular/router';
import {Profile} from './pages/profile/profile';
import {HomeComponent} from './pages/home/home.component';
import {AuthGuard} from '@auth0/auth0-angular';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {AppCoreLayoutComponent} from './components/app-core-layout/app-core-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AppCoreLayoutComponent,
    children: [
      {
        path: '', component: HomeComponent
      },
      {
        path: 'profile', component: Profile, canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: '**', component: NotFoundComponent
  }
];
