import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit, OnChanges {

  @Input()
  childValue: number | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let property in changes) {
      if (property === 'childValue') {
        console.log('Previous: ', changes[property].previousValue);
        console.log('Current: ', changes[property].currentValue);
        console.log('First Change: ',changes[property].firstChange);
      }
    }
  }

}
