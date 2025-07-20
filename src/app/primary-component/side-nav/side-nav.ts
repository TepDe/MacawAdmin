import {Component, ElementRef, HostListener} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [RouterModule
    , CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  templateUrl: './side-nav.html',
  styleUrls: ['./side-nav.css'],
  animations: [
    trigger('submenu', [
      state('collapsed', style({height: '0', overflow: 'hidden', opacity: 0})),
      state('expanded', style({height: '*', opacity: 1})),
      transition('collapsed <=> expanded', animate('300ms ease-in-out'))
    ]),
    trigger('arrowRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('collapsed <=> expanded', animate('300ms ease-in-out'))
    ])
  ]
})
export class SideNav {
  menuItems = [
    {label: 'Home', route: '/home', icon: 'home'},
    {label: 'Dashboard', route: '/dashboard', icon: 'dashboard'},
    {
      label: 'Product',
      route: '/product',
      icon: 'inventory',
      expanded: false,
      children: [
        {label: 'Product', route: '/product'},
        {label: 'Create', route: '/product/create'}
      ]
    },
    {label: 'Help', route: '/help', icon: 'help'},
    {
      label: 'Settings',
      route: '/settings',
      icon: 'settings',
      expanded: false,
      children: [
        {label: 'Account', route: '/settings/account'},
        {label: 'Privacy', route: '/settings/privacy'}
      ]
    },
  ];
  isHandset$!: Observable<boolean>; // use definite assignment assertion


  constructor(private elementRef: ElementRef,
              private breakpointObserver: BreakpointObserver,
  ) {
    this.isHandset$ = this.breakpointObserver
      .observe([Breakpoints.Handset])
      .pipe(
        map(result => result.matches),
        shareReplay()
      );

  }

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: EventTarget | null): void {
    if (!(target instanceof HTMLElement)) return;

    if (!this.elementRef.nativeElement.contains(target)) {
      this.menuItems.forEach(item => item.expanded = false);
    }
  }

  toggleSubMenu(clickedItem: any): void {
    this.menuItems.forEach(item => {
      if (item !== clickedItem && item.children) {
        item.expanded = false;
      }
    });
    if (clickedItem.children) {
      clickedItem.expanded = !clickedItem.expanded;
    }
  }
}
