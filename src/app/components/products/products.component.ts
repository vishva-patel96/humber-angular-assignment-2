import { Component, OnInit } from '@angular/core';
import { IProductData } from 'src/app/components/models/productInterface';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // Original product list
  productData: IProductData[] = [];
  // Filtered product list based on input value coming from navbar component.
  filteredData: IProductData[] = this.productData;
  
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.loadProducts();
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

  /**
   * @param filterString item name coming from navbar component
   * Based on input string in the searchbar, filter the products and render 
   * on the products page. 
   */
  searchText(filterString: string) {
    if (filterString !== "") {
      this.filteredData = this.productData.filter(product => {
        const lowerCaseText = filterString.toLowerCase();
        const lowerCaseBookName = product.name.toLowerCase();
        return lowerCaseBookName.includes(lowerCaseText);
      })
    } else {
      this.filteredData = this.productData;
    }
  }

}
