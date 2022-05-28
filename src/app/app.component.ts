import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'humber-angular-assignment-2';
  // searchString = ''
  filterData(filterString: any) {
    console.log(filterString);
  }

}
