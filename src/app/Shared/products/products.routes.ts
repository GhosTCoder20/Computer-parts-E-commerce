import { Routes } from '@angular/router';  

export const route:Routes=[
    {
        path:'',
        loadComponent:()=>import('./products').then(m=>m.Products)
    },
    {
        path:':id',
        loadComponent:()=>import('./product/product').then(m=>m.Product)
    }
]