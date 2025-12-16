import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from './Shared/products/product-model';
import { user } from './core/Users/users-model';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private http = inject(HttpClient);
  private BASE_URL = 'https://e-commerce-fake-api-production.up.railway.app';

  Loading = signal<boolean>(false);
  ProductsList: product[] = [];
  product={};
  UsersList: user[] = [];
  error: string = '';

  //CRUD oprations for products

  getProducts() {
    this.Loading.set(true);
    this.http.get<any[]>(`${this.BASE_URL}/products`).subscribe({
      next: (data) => {
        this.ProductsList = data;
        this.Loading.set(false);
      },
      error: (err) => {
        this.Loading.set(false);
        this.error = 'Failed to get products';
        console.error('Failed to get products', err);
      },
    });
    return this.ProductsList;
  }

  getProductById(id: number) {
    this.Loading.set(true);
    this.product=this.http.get<product>(`${this.BASE_URL}/products/${id}`);
    return this.product;
  }

  createProduct(newProduct: product) {
    this.Loading.set(true);

    return this.http.post<product>(`${this.BASE_URL}/products`, newProduct).pipe(
      tap((created) => {
        this.ProductsList = [...this.ProductsList, created];
        this.Loading.set(false);
      })
    );
  }

  //CRUD oprations for users
  getUsers() {
    this.Loading.set(true);

    this.http.get<any[]>(`${this.BASE_URL}/users`).subscribe({
      next: (data) => {
        this.Loading.set(false);
        this.UsersList = data;
      },
      error: () => {
        this.Loading.set(false);
        this.error = 'Failed to get users';
        console.log('Failed to get users');
      },
    });
    return this.UsersList;
  }
}
