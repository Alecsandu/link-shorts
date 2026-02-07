import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AppCoreHeaderComponent} from './components/app-core-header/app-core-header.component';
import {AppCoreFooterComponent} from './components/app-core-footer/app-core-footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppCoreHeaderComponent, AppCoreFooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App {
}
