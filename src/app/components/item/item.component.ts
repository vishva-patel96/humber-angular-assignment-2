import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { IProductData } from 'src/app/components/models/productInterface';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  /**
   * Expect to get the item from productList
   */
@Input() item:IProductData = {
  name: '',
  price: '',
  image: ''
}
/**
 * Emit an event once an item is added in the cart
 */
@Output() addingItemToCart = new EventEmitter<IProductData>();
  constructor() { }

  ngOnInit(): void {

  }

  addToCart(item: IProductData) {
      this.addingItemToCart.emit(item)
  }

}
