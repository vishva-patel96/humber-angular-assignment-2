import { Component, Input, OnInit } from '@angular/core';
import { IOrderData } from '../../productInterface'
@Component({
  selector: 'order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  @Input() order:IOrderData = {
    orderNumber: '',
    total: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
