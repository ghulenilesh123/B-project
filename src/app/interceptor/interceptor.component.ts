import { Component } from '@angular/core';
import { CompoServiceService } from '../all_service/service/compo-service.service';
@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styleUrls: ['./interceptor.component.css']
})
export class InterceptorComponent {

  constructor(private CompoService: CompoServiceService){

    console.log("hello")

  this.getUserDetails();
  this.getUserDetails();
  this.getSingleUser();
  }

  getUserDetails(){
    let id = 6;
    this.CompoService.getUserData(id).subscribe((res:any)=>{
      console.log(res);
    })
  }

  getSingleUser(){
    const id = 5;
    this.CompoService.getSingleUser(id).subscribe((res:any)=>{
      console.log(res);
    })

  }


}
