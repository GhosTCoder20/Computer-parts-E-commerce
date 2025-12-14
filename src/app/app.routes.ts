import { Routes } from '@angular/router';
import { Main } from './Components/main/main';

export const routes: Routes = [
    {
        path:'',component:Main,
        title:'Home',
        pathMatch:'full'
    },
    {
        path:'products',loadComponent:()=>import('./Shared/products/products').then(m=>m.Products),
        title:"Products"
    },
    {
        path:'Login',loadComponent:()=>import('./Components/main/login-form/login-form').then(m=>m.LoginForm),
        title:"Login"
    },
    {
        path:'Signup',loadComponent:()=>import('./Components/main/sign-up-form/sign-up-form').then(m=>m.SignUpForm),
        title:"Sign-Up"
    }
];
