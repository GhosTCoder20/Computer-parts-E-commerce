import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from './Shared/products/product-model';
import { user } from './core/Users/users-model';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private http = inject(HttpClient);

  // central lists and observable subject for products
  private productsSubject = new BehaviorSubject<product[]>([]);
  products = this.productsSubject.asObservable();

  private LoadingSubject = new BehaviorSubject<boolean>(false);
  loading = this.productsSubject.asObservable();

  ProductsList: product[] = [];
  UsersList: user[] = [];
  error: string = '';

  // fetch products and publish to productsSubject
  getProducts() {
    this.LoadingSubject.next(true);
    this.http.get<any[]>('https://e-commerce-fake-api.onrender.com/products').subscribe({
      next: (data) => {
        this.ProductsList = data;
        this.productsSubject.next(data);
        this.LoadingSubject.next(false);
      },
      error: (err) => {
        this.LoadingSubject.next(false);
        this.error = 'Failed to get products';
        console.error('Failed to get products', err);
      },
    });
    return this.ProductsList;
    // return this.products;
  }

  createProduct(newProduct: product) {
    this.LoadingSubject.next(true);
    return this.http
      .post<product>('https://e-commerce-fake-api.onrender.com/products', newProduct)
      .pipe(
        tap((created) => {
          this.ProductsList = [...this.ProductsList, created];
          this.productsSubject.next(this.ProductsList);
          this.LoadingSubject.next(false);
        })
      );
  }

  getUsers() {
    this.http.get<any[]>('https://e-commerce-fake-api.onrender.com/users').subscribe({
      next: (data) => {
        this.UsersList = data;
      },
      error: () => {
        this.error = 'Failed to get users';
        console.log('Failed to get users');
      },
    });
  }
}
