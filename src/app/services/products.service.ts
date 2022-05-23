import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private listOfProducts = [];
  cartItems = [];

  constructor() { }

  getProducts() {
    // http call to retrieve list of products
  };

  getOrderData() {
    // http call to retrieve list of orders
  }

  clearCart() {
    this.cartItems = [];
  }
}
