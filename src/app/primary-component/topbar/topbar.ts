import {Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RouterModule} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {FormControlDirective, InputGroupComponent} from '@coreui/angular';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-topbar',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
    MatButton,
    InputGroupComponent,
    FormControlDirective,
    NgOptimizedImage
  ],
  standalone: true,

  templateUrl: './topbar.html',
  styleUrl: './topbar.css'
})
export class Topbar {

}
