import { Component, Inject, inject, OnInit } from '@angular/core';
import { ProductCards } from '../../Shared/product-cards/product-cards';
import { product } from './product-model';
import { ConfigService } from '../../Config-Service';

@Component({
  selector: 'app-products',
  imports: [ProductCards],
  templateUrl: './products.html',
})
export class Products implements OnInit {
  products: product[] = [];
  constructor(private ConfigService: ConfigService) {}
  ngOnInit() {
    // trigger initial load (will push into products$ when response arrives)
    this.products = this.ConfigService.getProducts();
  }
}
