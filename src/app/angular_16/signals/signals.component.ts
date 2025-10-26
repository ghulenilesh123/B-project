import { Component, signal } from '@angular/core';
import { GaurdsServiceService } from 'src/app/all_service/service2/gaurds-service.service';
import { SingalserviceService } from 'src/app/all_service/singalservice/singalservice.service';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css']
})
export class SignalsComponent {


    public getinput :any=''
    public data :any=''

  constructor(private signalservice:SingalserviceService){

     // create signal
    var signaldata= signal("this is first value ")

    //set signal 
    signaldata.set("this is second value "+ 5)

    // update 
    signaldata.update((val:any)=>val + 10)

    // 

    console.log(signaldata())
    
  }
  
  
  // signal with service
  
  submit(){
  
    this.signalservice.setData(this.getinput)
     this.data = this.signalservice.getData()
     console.log(this.data)

}




}
