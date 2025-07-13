import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-session-storage',
  templateUrl: './session-storage.component.html',
  styleUrls: ['./session-storage.component.css']
})
export class SessionStorageComponent {
public myform :any;
  public res1:any;
  public res2:any;
  public res3:any;
  public res4:any;
  public res5:any;
  public res6:any;

  constructor(private fb :FormBuilder){
  this.  getData()

  this.myform=this.fb.group({
    name:[''],
    lname:[''],
    job:[''],
    age:[''],
    email:[''],
    pass:[''],

  })
  }

  getData(){
    this. res2= sessionStorage.getItem("lname")
    this. res3= sessionStorage.getItem("job")
    this. res4= sessionStorage.getItem("age")
    this. res1= sessionStorage.getItem("name")
    this. res5= sessionStorage.getItem("email")
    this. res6= sessionStorage.getItem("pass")

  }
  
  setData(){
 sessionStorage.setItem("name",this.myform.value.name)
 sessionStorage.setItem("lname",this.myform.value.lname)
 sessionStorage.setItem("job",this.myform.value.job)
 sessionStorage.setItem("age",this.myform.value.age)
 sessionStorage.setItem("email",this.myform.value.email)
 sessionStorage.setItem("pass",this.myform.value.pass)
 

  }

}
