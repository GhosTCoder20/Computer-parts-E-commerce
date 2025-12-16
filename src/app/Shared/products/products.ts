import { Component, computed, inject, OnInit } from '@angular/core';
import { ProductCards } from '../../Shared/product-cards/product-cards';
import { product } from './product-model';
import { ConfigService } from '../../Config-Service';
import { Spinner } from '../spinner/spinner';

@Component({
  selector: 'app-products',
  imports: [ProductCards,Spinner],
  templateUrl: './products.html',
})
export class Products implements OnInit {
  products: product[] = [];
  private opService = inject(ConfigService);
  loading=computed(()=>this.ConfigService.Loading());
  constructor(private ConfigService: ConfigService) {}
  ngOnInit() {
    this.products = this.ConfigService.getProducts();
  }
}
