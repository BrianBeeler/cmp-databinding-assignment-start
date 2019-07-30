import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-even-component',
    templateUrl: './even.component.html',
    styleUrls: ['./even.styles.url']
})
export class EvenComponent implements OnInit {
    constructor(public num : number) {}
    
    ngOnInit() {

    }

}