import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

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



//  ================singal====================
// creating signal with default value 
  private _sharedMessage = signal<string>('Default Value'); 

// to set the updated value
  setMessage(message:string){
    this._sharedMessage.set(message);
  }

  // to get the updated value 
  readonly sharedMessage = this._sharedMessage();

//  alternate way to get the updated value
  getMessage(){
    return this._sharedMessage();
  }


  // to store multiple or big data inside singnals 
  public arrayData = [
    {name:'nilesh', age:23,job:"xyz",marks:99},
    {name:'nilesh', age:23,job:"xyz",marks:99},
    {name:'nilesh', age:23,job:"xyz",marks:99},
    {name:'nilesh', age:23,job:"xyz",marks:99},
    {name:'nilesh', age:23,job:"xyz",marks:99},
    {name:'nilesh', age:23,job:"xyz",marks:99},
    {name:'nilesh', age:23,job:"xyz",marks:99},
    {name:'nilesh', age:23,job:"xyz",marks:99},
    {name:'nilesh', age:23,job:"xyz",marks:99},
    {name:'nilesh', age:23,job:"xyz",marks:99},
    {name:'nilesh', age:23,job:"xyz",marks:99},
    {name:'nilesh', age:23,job:"xyz",marks:99},
    {name:'nilesh', age:23,job:"xyz",marks:99},
    {name:'nilesh', age:23,job:"xyz",marks:99},
    {name:'nilesh', age:23,job:"xyz",marks:99},
    {name:'nilesh', age:23,job:"xyz",marks:99},
    {name:'nilesh', age:23,job:"xyz",marks:99},
    {name:'nilesh', age:23,job:"xyz",marks:99},
    {name:'nilesh', age:23,job:"xyz",marks:99},
    {name:'nilesh', age:23,job:"xyz",marks:99},
    {name:'nilesh', age:23,job:"xyz",marks:99},
    {name:'nilesh', age:23,job:"xyz",marks:99},
    {name:'nilesh', age:23,job:"xyz",marks:99},
   
  ]

  private lognData = signal<any>(this.arrayData); 

mydata(){
  return this.lognData()
}
}
