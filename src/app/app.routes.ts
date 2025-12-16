import { Routes } from '@angular/router';
import { Main } from './Components/main/main';

export const routes: Routes = [
  {
    path: '',
    component: Main,
    title: 'Home',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadChildren: () => import('./Shared/products/products.routes').then((m) => m.route),
    title: 'Products',
  },
  {
    path: 'Login',
    loadComponent: () => import('./core/Users/login-form/login-form').then((m) => m.LoginForm),
    title: 'Login',
  },
  {
    path: 'Signup',
    loadComponent: () => import('./core/Users/sign-up-form/sign-up-form').then((m) => m.SignUpForm),
    title: 'Sign-Up',
  },
  {
    path: 'AdminPanel',
    loadChildren: () =>
      import('./Components/Features/admin-panel/admin-panel.routes').then((m) => m.route),
  },
];
