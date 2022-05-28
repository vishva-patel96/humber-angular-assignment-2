import { Component, OnInit } from '@angular/core';
import { IProductData } from 'src/app/components/models/productInterface';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  productData: IProductData[] = []
  filteredData: IProductData[] = this.productData
  filterString: string = ''
  
  constructor(private productService: ProductsService) { 

    }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(){
    this.productService.getProducts().subscribe((data: IProductData[]) => {
      this.productData = data;
      this.filterString = this.productService.getFilterString();
      if (this.filterString !== "") {
        this.filteredData = this.productData.filter(product => {
          const lowerCaseText = this.filterString.toLowerCase();
          const lowerCaseProductName = product.name.toLowerCase();
          return lowerCaseProductName.includes(lowerCaseText);
        })
      } else {
        this.filteredData = this.productData;
      }
    })
  }

  addItemToCart(item: IProductData) {
    this.productService.addToCart(item);
  }

}
