import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-a',
  templateUrl: './login-a.component.html',
  styleUrls: ['./login-a.component.css']
})
export class LoginAComponent {
public signupform:any
// public signupdata:any
constructor(
  private fb :FormBuilder,
  private http :HttpClient,
  private router : Router
  ){
  this.signupform=this.fb.group({
    name:[''],
    lname:[''],
    email:[''],
    job:[''],
    Gender:[''],
    Password:[''],
  })
}
// signupForm: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//     private http: HttpClient,
//     private router: Router
//   ) {
//     this.signupForm = this.fb.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//   }

  onSubmit() {
    const { username } = this.signupform.value;

    // Check if username already exists
    this.http.get<any[]>(`http://localhost:5000/users?username=${username}`).subscribe(users => {
      if (users.length > 0) {
        alert('Username already exists!');
      } else {
        this.http.post('http://localhost:5000/users', this.signupform.value).subscribe(() => {
          alert('Signup successful!');
          this.router.navigate(['home']);
        });
      }
    });
  }




  

}
