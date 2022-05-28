import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { IProductData } from 'src/app/productInterface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  

  @Input() title = '';
  @Output() search: EventEmitter<string>= new EventEmitter()
  constructor(private prodService: ProductsService) {

  }

  ngOnInit(): void {
  }

  filterItems(input: string) {
    
    this.prodService.setFilterString(input);
    
    // this.search.emit(input)
  }

  // filterItems(input: string) {
  //   this.prodService.setFilterString(input);
  //   }


}

