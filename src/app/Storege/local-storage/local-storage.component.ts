import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.css']
})
export class LocalStorageComponent {
public myform :any;
  public res1:any;
  public res2:any;
  public res3:any;
  public res4:any;
  public res5:any;
  public res6:any;
  public res7:any;
  public res8:any;
  public res9:any;
  public res10:any;
  public res11:any;
  public res12:any;

  constructor(private fb :FormBuilder,private cookies:CookieService){
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
    this. res1= localStorage.getItem("name")
    this. res2= localStorage.getItem("lname")
    this. res3= localStorage.getItem("job")
    this. res4= localStorage.getItem("age")
    this. res5= localStorage.getItem("email")
    this. res6= localStorage.getItem("pass")

      // emplementing cookie and set data
    this. res7= this.cookies.get("name")
    this. res8= this.cookies.get("lname")
    this. res9= this.cookies.get("job")
   this. res10= this.cookies.get("age")
   this. res11= this.cookies.get("email")
   this. res12= this.cookies.get("pass")
  }
  
  setData(){
 localStorage.setItem("name",this.myform.value.name)
 localStorage.setItem("lname",this.myform.value.lname)
 localStorage.setItem("job",this.myform.value.job)
 localStorage.setItem("age",this.myform.value.age)
 localStorage.setItem("email",this.myform.value.email)
 localStorage.setItem("pass",this.myform.value.pass)
 
 // emplementing cookie and get data
 this.cookies.set("name",this.myform.value.name)
 this.cookies.set("lname",this.myform.value.lname)
 this.cookies.set("job",this.myform.value.job)
 this.cookies.set("age",this.myform.value.age)
 this.cookies.set("email",this.myform.value.email)
 this.cookies.set("pass",this.myform.value.pass)
  }

  
}
