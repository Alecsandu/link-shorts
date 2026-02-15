import { Component } from '@angular/core';
import {AppCoreFooterComponent} from "../app-core-footer/app-core-footer.component";
import {AppCoreHeaderComponent} from "../app-core-header/app-core-header.component";
import {AppCoreMainComponent} from "../app-core-main/app-core-main.component";

@Component({
  selector: 'app-app-core-layout',
    imports: [
        AppCoreFooterComponent,
        AppCoreHeaderComponent,
        AppCoreMainComponent
    ],
  templateUrl: './app-core-layout.component.html',
  styleUrl: './app-core-layout.component.scss',
})
export class AppCoreLayoutComponent {

}
