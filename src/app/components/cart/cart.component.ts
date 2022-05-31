import { Component, OnInit } from '@angular/core';
import { IProductData } from 'src/app/components/models/productInterface';
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

  /**
   * clear the cartItemsin product service and refresh the page to 
   * clear the rendered items.
   */
  clearCart() {
    this.prodService.clearCart();
    this.ngOnInit();
  }

}
