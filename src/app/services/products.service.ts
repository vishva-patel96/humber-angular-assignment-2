import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IProductData, IOrderData } from '../productInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private listOfProducts:IProductData[] = [];
  private cartItems:IProductData[] = [];
  private filterString= new BehaviorSubject("");
  //currentData = this.filterString.asObservable()

  constructor(private http: HttpClient) { 
    this.http.get('../../assets/product-data.json').subscribe((data: any) => {
      this.listOfProducts = data;
    })
  }

  getProductList() {
    return [...this.listOfProducts];
  }

  getFilterString(){
    return this.filterString;
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

  // filterData(filterString: any) {
  //   if (filterString !== "") {
  //     this.filteredData = this.productData.filter(product => {
  //       const lowerCaseText = filterString.toLowerCase();
  //       const lowerCaseBookName = product.name.toLowerCase();
  //       return lowerCaseBookName.includes(lowerCaseText);
  //     })
  //   } else {
  //     // if the user has not entered anything, it should show the full list
  //     // of books;
  //     this.filteredData = this.productData;
  //   }
  //   console.log(this.filterData)
  // }

}
