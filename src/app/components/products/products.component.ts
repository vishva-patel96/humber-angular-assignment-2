import { Component, OnInit } from '@angular/core';
import { IProductData } from 'src/app/productInterface';
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
    this.filterString = this.productService.getFilterString();
    // console.log(this.productService.getFilterString().value)
  }

  loadProducts(){
    this.productService.getProducts().subscribe((data: IProductData[]) => {
      this.productData = data;
      this.filteredData = this.productData;
    })
  }

  addItemToCart(item: IProductData) {
    this.productService.addToCart(item);
  }



  filterData() {
    if (this.filterString !== "") {
      this.filteredData = this.productData.filter(product => {
        const lowerCaseText = this.filterString.toLowerCase();
        const lowerCaseBookName = product.name.toLowerCase();
        return lowerCaseBookName.includes(lowerCaseText);
      })
    } else {
      // if the user has not entered anything, it should show the full list
      // of books;
      this.filteredData = this.productData;
    }
    console.log(this.filterData)
    this.ngOnInit();
  }

}
