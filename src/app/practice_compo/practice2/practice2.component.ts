import { Component, ContentChild, ElementRef, HostBinding, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-practice2',
  templateUrl: './practice2.component.html',
  styleUrls: ['./practice2.component.css']
})
export class Practice2Component {

@ContentChild("pcontent") recive!:ElementRef

ngAfterContentInit(){
  this.recive.nativeElement.style.color = "red"
  this.recive.nativeElement.style.backgroundColor = "lightgreen"
  this.recive.nativeElement.style.border= "4px solid black"

  this.recive.nativeElement.style.width = "50%"
  this.recive.nativeElement.style.hieght = "400px"
}

}
