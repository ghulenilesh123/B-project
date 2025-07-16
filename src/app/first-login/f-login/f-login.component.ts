import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/all_service/service/login-service.service';

@Component({
  selector: 'app-f-login',
  templateUrl: './f-login.component.html',
  styleUrls: ['./f-login.component.css']
})
export class FLoginComponent {
  loginForm!: FormGroup;
  myform2!:FormGroup
  userdata: any = ''
  showform: boolean = true
  recive:any=""
  signin() {
    this.showform = true
  }
  signup() {
    this.showform = false
  }
  public showLoginError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginServiceService,
    private router: Router,
    private http : HttpClient
  ) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.email],
    });


    
    this.myform2=this.fb.group({
         password: ['', Validators.required],
      })

  }

  onSubmit(): void {
    
    if (this.loginForm.valid) {
      // console.log('Login success:', this.loginForm.value);
      const { username, password, email } = this.loginForm.value;

      this.loginService.login2(this.loginForm.value).subscribe((res: any) => {
        console.log(res)
      })
      this.loginService.login(username, password,); // if value match then login method return true

    if (this.loginService.isLoggedIn()) {           // if we have true value then naviget on home
      this.router.navigate(['home']);

    } else {
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

onSubmit2() {
  // console.log(this.myform2.value.password)
    const password2 = this.myform2.value.password;
    sessionStorage.setItem("password2",password2)

    this.http.get<any[]>('http://localhost:3000/users', {
      params: { password2 }
    }).subscribe(users => {
      if (users.length > 0) {
        this.recive = users[0]
        console.log(this.recive)
      } else {
        console.log(" No match. Wrong password.");
      }
    });
  }
 
}
