import { Component, OnInit } from '@angular/core';
import { IProductData } from 'src/app/productInterface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  itemsInCart: IProductData[] = []
  constructor(private prodService: ProductsService) { }

  ngOnInit(): void {
    this.itemsInCart = this.prodService.getCartItems()
  }

  clearCart() {
    this.prodService.clearCart();
    this.ngOnInit();
  }

}
