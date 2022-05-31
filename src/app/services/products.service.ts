import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProductData } from '../components/models/productInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private listOfProducts:IProductData[] = [];
  private cartItems:IProductData[] = [];

  constructor(private http: HttpClient) { 
    this.http.get('../../assets/product-data.json').subscribe((data: any) => {
      this.listOfProducts = data;
    })
  }

  getProductList() {
    return [...this.listOfProducts];
  }
 
  getProducts():any {
    // http call to retrieve list of products
    return this.http.get('../../assets/product-data.json');
  };

  getOrderData(): any {
    // http call to retrieve list of orders
    return this.http.get('../../assets/order-data.json');
  }

  addToCart(item: IProductData) {
    this.cartItems.push(item)
  }

  getCartItems():IProductData[] {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }


}
