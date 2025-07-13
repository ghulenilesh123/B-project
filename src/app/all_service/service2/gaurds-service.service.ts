import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GaurdsServiceService {
 
     
  constructor(private http :HttpClient){
    
  }
  islogged:boolean=true;



  login(){
    this.islogged=true
  }


  logout(){
    this.islogged=false
  }


  islogin(){
   return this.islogged
  }


  private currentuser ={
    name: "kajal",
    lname:"xyz",
    role : "student"
  }

  isuser(rele:string):boolean{
    return rele === this.currentuser.role
  }


 get(){
   return this.http.get("https://jsonplaceholder.typicode.com/posts")
 }


}
