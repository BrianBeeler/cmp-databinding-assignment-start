import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})


export class GameControlComponent implements OnInit, OnDestroy {

  @Output() newNumber = new EventEmitter<number>();

  currentNumber:number = 0;
  intervalId:number = null;

  startInterval() {
    if (!this.intervalId) {
      this.intervalId = window.setInterval(() => {
        this.newNumber.emit(this.currentNumber++);
      },2000)
    }
  }

  stopInterval() {
    window.clearInterval(this.intervalId);
    this.intervalId = null;
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
    }
  }

}
