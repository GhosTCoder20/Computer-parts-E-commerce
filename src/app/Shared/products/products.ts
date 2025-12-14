import { Component,Input, OnInit } from '@angular/core';
import { ProductCards } from "../../Shared/product-cards/product-cards";
import { productServices } from '../../Products-servic';
import { product } from './product-model';

type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  imgUrl: string;
  stocks: number;
};
@Component({
  selector: 'app-products',
  imports: [ProductCards],
  templateUrl: './products.html',
})
export class Products {
  products : product[]=[];
  constructor(private productServices:productServices){}
  ngOnInit(){
    this.productServices.getProducts().subscribe(data=>{
      this.products=data;
    });
  };
}
