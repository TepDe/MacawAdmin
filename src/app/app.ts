import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { SideNav } from './shared/components/side-nav/side-nav';  // fixed relative path
import { Topbar } from './shared/components/topbar/topbar';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {CommonModule} from '@angular/common'; // <- add this
@Component({
  selector: 'app-root',
  standalone: true,            // make this standalone too
  imports: [RouterOutlet, RouterModule, SideNav,Topbar,
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule

  ],  // import all needed components/modules
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('untitled');
}

