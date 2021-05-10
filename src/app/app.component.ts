import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularTestKaran';
  yellowArr : any;
  fruitsArr = [{
    fruit : 'apple',
    color : 'red'
  },
  {
    fruit : 'banana',
    color : 'yellow'
  },
  {
    fruit : 'grapes',
    color : 'yellow'
  }]

ngOnInit(){
  this.yellowArr = this.fruitsArr.filter( // using filter
    fruit => fruit.color === 'yellow');

    console.log("color yellow arr",this.yellowArr);
    
}
  

}
