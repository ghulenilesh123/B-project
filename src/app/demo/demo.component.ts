import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
     
  public myform :any=[]
 public listdata:any=[]

  constructor(private fb :FormBuilder){
     
     this .myform=this.fb.group({
      name:[""],
      lname:[""],
      pass:[""],
     })

  }


  submit(){
    
    this.listdata.push({...this.myform.value})
    console.log(this.listdata)
  }
}
