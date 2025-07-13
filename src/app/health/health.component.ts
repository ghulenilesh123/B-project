import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent {
public get:any=""
public detafromhealth:any="data from health to child"
@Input() reacivedata:any;
@Output() sendevent = new EventEmitter() 


sendchiledata:any="data from health  to home"




getData(){
  this.get=this.reacivedata
  console.log(this.get)
}
sendData(){
  this.sendevent.emit(this.sendchiledata)
}

constructor(private act : ActivatedRoute){
  this.act.data.subscribe((res:any)=>{
    console.log(res[0])
  })
}



}
