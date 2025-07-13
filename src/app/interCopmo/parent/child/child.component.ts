import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

@Input() reaciveparentdt:any
@Input() reacivehealth:any


public senddatafrmchild :any='data from child to parent'

@Output() sendEvent = new EventEmitter();

senddatafromchild(){
  this.sendEvent.emit(this.senddatafrmchild)
}
}
