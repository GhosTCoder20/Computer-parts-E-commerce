import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { product } from '../products/product-model';

@Component({
  selector: 'app-product-cards',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-cards.html',
  styles: `
  :host{
    direction:ltr
  }
  `,
})
export class ProductCards {
  @Input() product:product={ id: 0,
  name: '',
  brand: '',
  category:'',
  price: 0,
  imageURL: '',
  stock: 0,
  rating:'',
  createdAt:''}
  isLiked: boolean = false;
  toggleFavorite() {
    this.isLiked = !this.isLiked;
  }
}
