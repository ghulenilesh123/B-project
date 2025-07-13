import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inner-child',
  templateUrl: './inner-child.component.html',
  styleUrls: ['./inner-child.component.css']
})
export class InnerChildComponent {

 public sendDataobj:any={name:"nilesh" , lname:"ghule" , marks:99, working:false }

 @Output() sendEvent = new EventEmitter()
 public sendDataarray:any=[1,2,3,4,5,6]
 public sendDatastr:any='deta from innerchild to parent 2'

 constructor(){
 
 }
 sendData(){
  this.sendEvent.emit(this.sendDatastr)
  return "im sending data from innerchild "
  
 }

}
