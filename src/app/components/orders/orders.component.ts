import { Component, OnInit } from '@angular/core';
import { IOrderData } from 'src/app/components/models/productInterface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  
  orders:IOrderData [] = []

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getOrderData().subscribe((data: IOrderData []) => {
      this.orders = data;
    });
  }

}
