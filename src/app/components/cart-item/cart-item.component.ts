import { Component, Input, OnInit } from '@angular/core';
import { IProductData } from 'src/app/components/models/productInterface';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() item: IProductData = {
    name:'',
    price:'',
    image: ''
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
