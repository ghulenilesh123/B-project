import { Component } from '@angular/core';
import { LoginServiceService } from '../all_service/service/login-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
public xyz:any=''
  datafromhome:any="data from home to health"
constructor( private login:LoginServiceService){
    sessionStorage.setItem('token','generating token =>[xcvcxasw123sdc]');

}

reaciveEvent(event:any){
   this.xyz=event
   console.log(this.xyz)// ckeck html
}





}
