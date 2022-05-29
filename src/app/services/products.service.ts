import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IProductData, IOrderData } from '../components/models/productInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private listOfProducts:IProductData[] = [];
  private filteredProduct: IProductData[] = [];
  private cartItems:IProductData[] = [];
  private filterString= new BehaviorSubject("");

  constructor(private http: HttpClient) { 
    this.http.get('../../assets/product-data.json').subscribe((data: any) => {
      this.listOfProducts = data;
    })
  }

  getProductList() {
    return [...this.listOfProducts];
  }

  getFilterString(){
    return this.filterString.value;
  }

  setFilterString(filter:string){
    this.filterString.next(filter)
  }
  
  getProducts():any {
    // http call to retrieve list of products
    return this.http.get('../../assets/product-data.json')
  };

  getOrderData(): any {
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

  filterData() {
    let filterString = this.getFilterString();
    if (filterString !== "") {
      this.filteredProduct = this.listOfProducts.filter(product => {
        const lowerCaseText = filterString.toLowerCase();
        const lowerCaseBookName = product.name.toLowerCase();
        return lowerCaseBookName.includes(lowerCaseText);
      })
    } else {
      this.filteredProduct = this.listOfProducts;
    }
  }

  getFilteredProducts(){
    return [...this.filteredProduct];
  }

}
