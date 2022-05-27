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
  private cartItems:IProductData[] = [];
  private filterString: string = ''

  constructor(private http: HttpClient) { }

  getFilterString(){
    return this.filterString
  }

  setFilterString(filter:string){
    this.filterString = filter;
  }
  
  getProducts():any {
    // http call to retrieve list of products
    return this.http.get('../../assets/product-data.json')
  };

  getOrderData() {
    // http call to retrieve list of orders
    return this.http.get('../../assets/order-data.json')
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
