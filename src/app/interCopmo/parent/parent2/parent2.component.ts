import { Component, ViewChild, ViewChildren } from '@angular/core';
import { InnerChildComponent } from '../inner-child/inner-child.component';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component {
public receive:any=''
  @ViewChild(InnerChildComponent) datafrominner:any;
  @ViewChildren(InnerChildComponent) datafrominner2:any;

recevieEvent(event:any){
  this.receive=event
  console.log("hello",this.receive)
}

  ngAfterViewInit(){
//  console.log(this.datafrominner)
//  console.log(this.datafrominner.sendDataobj)
//  console.log(this.datafrominner.sendDataarray)
//  console.log(this.datafrominner.sendData())    // single time



 console.log(this.datafrominner2)
 this.datafrominner2._results.forEach((ele:any)=>{
  console.log(ele) // multiple time 
 })

  }

}
