import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'humber-angular-assignment-2';
  filterString: string = ''

  filter(inputString: string) {
    this.filterString = inputString;
  }
}
