import { Routes } from '@angular/router';
import { Users } from './users/users';
import { Dashboard } from './dashboard/dashboard';
export const route: Routes = [
  {
    path: '',
    loadComponent:()=>import('./admin-panel').then(m=>m.AdminPanel),
    children:[
      {
        path:'',
        component:Dashboard,
        title:'Dashboard'
      },
      {
        path:'users',
        component:Users,
        title:'Users'
      }
    ]
  },
];
