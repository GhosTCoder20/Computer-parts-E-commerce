import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCards } from '../../Shared/product-cards/product-cards';
import { ConfigService } from '../../Config-Service';
import { product } from '../../Shared/products/product-model';
import { Spinner } from '../../Shared/spinner/spinner';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'Main',
  standalone: true,
  imports: [CommonModule, ProductCards,Spinner,RouterLink],
  templateUrl: './main.html',
})
export class Main {
  products: product[] = [];
  private opService = inject(ConfigService);
  loading = computed(() => this.ConfigService.Loading());
  constructor(private ConfigService: ConfigService) {}

  ngOnInit() {
    this.products = this.ConfigService.getProducts();
  }
}
