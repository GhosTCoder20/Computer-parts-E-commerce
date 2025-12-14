import { Component, signal } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductCards } from '../../Shared/product-cards/product-cards';
import { productServices } from '../../Products-servic';

@Component({
  selector: 'Main',
  standalone: true,
  imports: [ CommonModule, ProductCards, RouterLinkWithHref],
  templateUrl: './main.html',
})
export class Main {
  constructor(private productServices: productServices) {}
  products=[
    {id:1,name:'Rtx3050 6GB',brand:'Asus',price:100,imgUrl:'/images/graphic cards 1.jpg',stocks:10},
    {id:2,name:'RTX 5050 8GB',brand:'MSI',price:200,imgUrl:'/images/graphic cards 2.jpg',stocks:10},
    {id:3,name:'RTX 5050 8GB',brand:'Zotiac',price:200,imgUrl:'/images/graphic cards 3.jpg',stocks:10},
    {id:4,name:'Razor 100000dbp',brand:'Razor',price:300,imgUrl:'/images/gaming mouse 1.jpg',stocks:10},
    {id:5,name:'Gaming 50000dbp',brand:'Corsier',price:400,imgUrl:'/images/gaming mouse 2.jpg',stocks:0},
  ];
  ngOnInit(){
    this.productServices.setProducts(this.products)
  }
}
