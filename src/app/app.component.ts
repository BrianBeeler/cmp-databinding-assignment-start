import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nums: number[] = [];
  

  onNewNumber(num) {
    console.log("onNewNumber", num);
    
    this.nums.push(num);
  }
}
