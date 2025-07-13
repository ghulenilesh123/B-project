import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/all_service/service/login-service.service';
import { GaurdsServiceService } from 'src/app/all_service/service2/gaurds-service.service';

@Component({
  selector: 'app-firt-login',
  templateUrl: './firt-login.component.html',
  styleUrls: ['./firt-login.component.css']
})
export class FirtLoginComponent {
loginForm!: FormGroup;
  public showLoginError:boolean= false;

  constructor(
    private fb: FormBuilder,
    private loginService:LoginServiceService,
    private router: Router
  ) {
   
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // console.log('Login success:', this.loginForm.value);
      const { username, password } = this.loginForm.value; 
      this.loginService.login(username, password); // if value match then login method return true
      if(this.loginService.isLoggedIn()){           // if we have true value then naviget on home
        this.router.navigate(['home']);
      } else{
        this.loginForm.reset();
        this.router.navigate(['']);                 // naviget in login 
        this.showLoginError = true;                 // show login error which writed in html
      }
    } else {
      this
      this.loginForm.markAllAsTouched(); // shows validation messages
      console.log(alert("please inter valid username and password"))
      
    }
  }
}
