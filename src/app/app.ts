import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { SideNav } from './shared/components/side-nav/side-nav';  // fixed relative path
import { Topbar } from './shared/components/topbar/topbar'; // <- add this

@Component({
  selector: 'app-root',
  standalone: true,            // make this standalone too
  imports: [RouterOutlet, RouterModule, SideNav,Topbar],  // import all needed components/modules
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('untitled');
}

