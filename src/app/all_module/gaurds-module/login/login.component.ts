import { Component } from '@angular/core';
import { GaurdsServiceService } from 'src/app/all_service/service2/gaurds-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private loginservice : GaurdsServiceService){

}

login(){
  this.loginservice.login()
}

logout(){
  this.loginservice.logout()
}




}
