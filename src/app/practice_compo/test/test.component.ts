import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
@HostBinding("style.background") bgcolor:string="red" 
@HostBinding("style.color")color:string="black" 
@HostBinding("style.font-size") font:any="16px" 

// @HostBinding("style.color")color:string="black"

@HostListener('click',['$event'])
 onClick(event:Event){
  console.log("on click event is fired");
 this.bgcolor='black'
 this.color="aqua"
 this.font="16px"

}


@HostListener('dblclick',['$event'])
onDblClick(event:Event){
  console.log("db click event is fired");

this.color='black'
 this.bgcolor='green'
 this.font="30px"

}


@HostListener('mouseover',['$event'])
onMouseover(event:Event){
  console.log("mover event is fired");

this.color='red'
//  this.bgcolor='aqua'


}

// click              => When mouse button is clicked
// dblclic            => When mouse is double-clicked
// mousedown	         => When mouse button is pressed down
// mouseup	           => When mouse button is released
// mouseenter         => When mouse enters element
// mouseleave         => When mouse leaves element
// mousemove          => When mouse moves inside element
// mouseover	         => When mouse moves over element
// mouseout           => When mouse moves out of element
// contextmenu        => Right-click on the element
// wheel / mousewheel => Mouse wheel scrolled






}
