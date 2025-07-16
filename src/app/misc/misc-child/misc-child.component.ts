import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-misc-child',
  templateUrl: './misc-child.component.html',
  styleUrls: ['./misc-child.component.css']
})
export class MiscChildComponent {

@ContentChild("pcontent") recive!:ElementRef

ngAfterContentInit(){
  this.recive.nativeElement.style.color = "red"
  this.recive.nativeElement.style.backgroundColor = "lightgreen"
  this.recive.nativeElement.style.border= "4px solid black"

  this.recive.nativeElement.style.width = "50%"
  this.recive.nativeElement.style.hieght = "400px"
}

}

