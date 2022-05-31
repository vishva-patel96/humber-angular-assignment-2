import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  @Input() title = '';
  /**
   * Output event to be emitted.
   */
  @Output() search: EventEmitter<string>= new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }

  /**
   * @param input search text entered in the searchbar input
   */
  filterItems(input: string) {
    this.search.emit(input);
  }


}

