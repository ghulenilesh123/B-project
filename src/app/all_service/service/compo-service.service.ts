import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompoServiceService {


  private message = new BehaviorSubject("this is default message")
  public currrntmessege = this.message.asObservable();
  constructor(private http:HttpClient) { }


  // to get current value data
get getData(){
return this.currrntmessege
}

//set and hold data 
 set setData(data:any){
    this.message.next(data)}



  getLoggedIn(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getUserData(id:any){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+id);
  }

  getSingleUser(id:any){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+id);
  }

  getComments(){
    return this.http.get("https://jsonplaceholder.typicode.com/comments");
  }

  // to implement resolver 
  getDataBeforeCompNavigation(){
    return this.http.get("https://jsonplaceholder.typicode.com/comments");

    // // understanding try and catch block 
    // try {
    //   return this.http.get("https://jsonplaceholder.typicode.com/comments");
    // } catch(error){
    //   throw error;
    // }

  }


}