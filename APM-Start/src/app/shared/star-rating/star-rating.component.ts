import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit, OnChanges {

  @Input()
  rating: number;

  @Output()
  ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  starWidth: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick() {
    this.ratingClicked.emit(`The rating ${ this.rating} was clicked!`);
  }
}
