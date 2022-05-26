import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IProductData, IOrderData } from '../productInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private listOfProducts:IProductData[] = [];
  cartItems = [];

  constructor(private http: HttpClient) { }

  getProducts():any {
    // http call to retrieve list of products
    return this.http.get('../../assets/product-data.json')
  };

  getOrderData() {
    // http call to retrieve list of orders
    return this.http.get('../../assets/order-data.json')
  }

  clearCart() {
    this.cartItems = [];
  }
}
