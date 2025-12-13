import { Routes } from '@angular/router';  

export const routes: Routes = [
    {
        path:'',loadComponent:()=>import('./Components/main/main').then(m=>m.Main),
        title:'Home',
        pathMatch:'full'
    },
    {
        path:'products',loadComponent:()=>import('./Components/main/products/products').then(m=>m.Products),
        title:"Products"
    }
];
