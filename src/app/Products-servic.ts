import {  Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { product } from './Components/main/products/product-model';

@Injectable({
  providedIn: 'root',
})
export class productServices {
  private productsSubject = new BehaviorSubject<product[]>([]);
  $products = this.productsSubject.asObservable();

  setProducts(products: product[]) {
    this.productsSubject.next(products);
  }

  getProducts() {
    return this.$products;
  }
}
