import { Component, Input, OnInit } from '@angular/core';
import { IProductData } from 'src/app/productInterface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() filterString = ''
  productData: IProductData[] = []
  filteredData: IProductData[] = []

  constructor(private productService: ProductsService) {   }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: IProductData[]) => {
      //console.log(data)
      this.productData = data
    })
  }

  addItemToCart(item: IProductData) {
    this.productService.addToCart(item);
    console.log(this.productService.getCartItems());
  }

}
