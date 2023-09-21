import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent {
  // Recieve the value from the parent component that is City-List
  starWidth: number = 125;
  @Input()
  rating!: number;
  // Send Value from child component to parent component
  @Output()
  ratingClicked: EventEmitter<string> = new EventEmitter();
  cropStar() {
    this.starWidth = this.rating * 24;
  }
  ngOnChanges() {
    this.cropStar();
  }

  onClickRating() {
    this.ratingClicked.emit(`The Rating Clicked is ${this.rating}`);
  }
}
