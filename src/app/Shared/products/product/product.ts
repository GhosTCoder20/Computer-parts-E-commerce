import { Component } from '@angular/core';
import { product } from '../product-model';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../../../Config-Service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
})
export class Product {
  products: product[] = [];
  product: product = {
    id: 0,
    name: '',
    brand: '',
    category: '',
    price: 0,
    imageURL: '',
    stock: 0,
    rating: '',
    createdAt: '',
  };
  private routeSub: Subscription | undefined;
  productSub: product = {
    id: 0,
    name: '',
    brand: '',
    category: '',
    price: 0,
    imageURL: '',
    stock: 0,
    rating: '',
    createdAt: '',
  };
  constructor(private route: ActivatedRoute, private ConfigService: ConfigService) {}

  ngOnInit() {
    this.routeSub = this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      const id = idParam ? Number(idParam) : 0;
      // this.productSub = this.ConfigService.getProductById(id);
    });
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }
}
