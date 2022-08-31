import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-count-timer',
  templateUrl: './count-timer.component.html',
  styleUrls: ['./count-timer.component.css']
})
export class CountTimerComponent implements OnInit, OnChanges {

  @Input()
  childTimeValue : number | undefined;

  constructor() {

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const property in changes) {
      if (property === 'childTimeValue') {
        console.log('Previous: ', changes[property].previousValue);
        console.log('Current: ', changes[property].currentValue);
        console.log('First Change: ', changes[property].firstChange);
      }
    }
  }

}
