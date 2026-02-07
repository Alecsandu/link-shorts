import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppCoreHeaderComponent} from './components/app-core-header/app-core-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppCoreHeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App {
  protected readonly title = signal('link-shorts');
}
