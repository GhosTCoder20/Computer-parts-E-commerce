import { Routes } from '@angular/router';  

export const routes: Routes = [
    {
        path:'',loadComponent:()=>import('./Components/main/main').then(m=>m.Main),
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
