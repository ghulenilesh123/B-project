import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoginServiceService } from './all_service/service/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showHeader: any
  // public username:any="nilesh";
  // public password:any="123";

  constructor(
    private router: Router,
    private loginService:LoginServiceService, 
  ){
    // implemnting this logic for authentication to show header 
    this.router.events.subscribe((res:any)=>{
      if(res instanceof NavigationEnd){
        // console.log("Hello I am checkig the routes");
        // debugger;
        this.showHeader = this.loginService.isLoggedIn();
      // if user is lodded in then only navigate to home otherwise it will navigate to login page 
        // this.showHeader ? this.router.navigate(['home']) : this.router.navigate([''])
        // this.loginService.login(this.username,this.password)
        if(this.showHeader)
       true

        else
          this.logout()
      }
    })
  }
     

  navigetiohealth() {
    this.router.navigateByUrl('health');
  }

  navigetiosme() {
    this.router.navigate(['sme']);
  }


  logout(){
    this.loginService.logout()
    this.router.navigate(['']);

  }
}
