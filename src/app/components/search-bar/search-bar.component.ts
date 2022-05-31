import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() textEntered: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    
  }

  seatchItem(event: KeyboardEvent) {
    this.textEntered.emit((event.target as HTMLInputElement).value);
  }

}
