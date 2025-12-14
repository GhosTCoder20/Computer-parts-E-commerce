import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  imgUrl: string;
  stocks: number;
};

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
  @Input() product: Product = { id: 0, name: '', brand: '', price: 0, imgUrl: '', stocks: 0 };
  isLiked: boolean = false;
  toggleFavorite() {
    this.isLiked = !this.isLiked;
  }
}
