import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-motor-insurance',
  templateUrl: './motor-insurance.component.html',
  styleUrls: ['./motor-insurance.component.css']
})
export class MotorInsuranceComponent {
   public input : any =[]
   public formisdurty: boolean = true
  constructor(private router :Router){

  }

  getdata(){
    this.router.navigateByUrl('car/' + this.input +`?name=rahul&&lname=ghule`)

  }

  canDeactivate(){
    return this.formisdurty 
    ? confirm("you want go in another page ")
    :true
  }




  

}


