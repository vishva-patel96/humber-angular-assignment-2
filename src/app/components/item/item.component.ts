import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { IProductData } from 'src/app/productInterface';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

@Input() item:IProductData = {
  name: '',
  price: '',
  image: ''
}
@Output() addingItemToCart = new EventEmitter<IProductData>();
  constructor() { }

  ngOnInit(): void {

  }

  addToCart(item: IProductData) {
      this.addingItemToCart.emit(item)
  }

}
