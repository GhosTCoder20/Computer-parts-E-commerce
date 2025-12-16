import { Routes } from '@angular/router';  
import { Product } from './product/product';


export const route:Routes=[
    {
        path:':id',
        component: Product
    },
    {
        path:'',
        loadComponent:()=>import('./products').then(m=>m.Products)
    }
]