import { Routes } from '@angular/router';
import { Product } from './shared/components/product/product';
import { Dashboard } from './shared/components/dashboard/dashboard';

export const routes: Routes = [
  { path: 'product', component: Product },
  { path: 'dashboard', component: Dashboard },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
