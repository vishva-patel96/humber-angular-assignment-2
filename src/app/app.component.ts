import { Component } from '@angular/core';
import { ProductsService } from './services/products.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'humber-angular-assignment-2';
  // searchString = ''
  constructor(private prodServ: ProductsService){}
  filterData(filterString: any) {
    //console.log(filterString);
    console.log(this.prodServ.getFilteredProducts())
    console.log()
  }

}
