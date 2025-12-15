import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductCards } from '../../Shared/product-cards/product-cards';
import { ConfigService } from '../../Config-Service';
import { product } from '../../Shared/products/product-model';

@Component({
  selector: 'Main',
  standalone: true,
  imports: [ CommonModule, ProductCards, RouterLinkWithHref],
  templateUrl: './main.html',
})
export class Main {
    products: product[] = [];
  
    constructor(private ConfigService: ConfigService) {}
  
    ngOnInit() {
      this.products=this.ConfigService.getProducts();
    }
}
