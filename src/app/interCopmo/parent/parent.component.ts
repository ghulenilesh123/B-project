import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {


  // / Input communication to send the data from parent to child 
  public dataFromParentToChild:any ="Data from parent component";
 

// Output comunication to recieve the data at parent
public recievedDataFromChild:any="";


  constructor(){
    console.log("I am in the parent");
  }


reacievevent(event:any){
  this.recievedDataFromChild=event
}


  


}
