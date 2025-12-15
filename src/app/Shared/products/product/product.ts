import { Component } from '@angular/core';
import { product } from '../product-model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
})
export class Product {
  product : product[]=[];
  constructor(private route:ActivatedRoute){}
  ngOnInit(){
    const id=this.route.snapshot.paramMap.get('id');
  }
}
