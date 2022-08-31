import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-countdown-timer-app';

  time: number | undefined;

  startCountdown() {
    const interval = setInterval(() => {
      // @ts-ignore
      this.time--;
      if (this.time === 0) {
        clearInterval(interval);
      }
    }, 1000);
  }

  stopCountdown() {

  }
}
