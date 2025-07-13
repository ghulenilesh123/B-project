import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  public loggedin :boolean= false
  // private currentUser = {
  //     name :"nilesh",
  //     lname:'ghule',
  //     job : "xyz",
  //     // role :`${'staff'} ${'sudent'}`
  //     role : 'student'

  //   }

  constructor(private http : HttpClient) { }

  isLoggedIn(){
   return  this.loggedin
  }

  login (username:any,password:any){
    if(username=='nilesh'&&password=='123'){
      this.loggedin=true
    }
  }

  logout(){
    this.loggedin=false
  }

  // userhasRole(role:string):boolean{
  //   return role === this.currentUser.role // return ture or false
  // }
private myData={
  role:"student"
}

userdata(role:any):boolean{
  return role=== this.myData.role
}


getresolver(){
 return  this.http.get('https://jsonplaceholder.typicode.com/posts')
}


}