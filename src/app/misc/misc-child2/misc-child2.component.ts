import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-misc-child2',
  templateUrl: './misc-child2.component.html',
  styleUrls: ['./misc-child2.component.css']
})
export class MiscChild2Component {
@HostBinding('style.backgroundColor') bgColor:string ="lightgreen";


// @HostListener('mouseover',['$event'])
// onMouseOver(event:Event){
//   console.log("Mouse over event is fired");
//   this.bgColor = "red";
// }

// @HostListener('mouseleave',['$event'])
// onMouseLeave(event:Event){
//   console.log("Mouse leave event is fired");
//   this.bgColor = "yellow";
// }

// @HostListener('click',['$event'])
// onClick(event:Event){
//   console.log("on click event is fired");
//   this.bgColor = "blue";
// }
myEvent(){
    console.log("Hello u have fired event");
  }


}
