import { HttpClient } from '@angular/common/http';
import { Component, HostBinding, HostListener } from '@angular/core';
import { LoginServiceService } from 'src/app/all_service/service/login-service.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-practice-1',
  templateUrl: './practice-1.component.html',
  styleUrls: ['./practice-1.component.css']
})
export class Practice1Component {
  signupForm: FormGroup;
constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      lname: ['', Validators.required],
      job: ['', Validators.required]
    });
  }

  onSubmit() {
    const { username } = this.signupForm.value;

    // Check if username already exists
    this.http.get<any[]>(`http://localhost:3000/users?username=${username}`).subscribe(users => {
      if (users.length > 0) {
        alert('Username already exists!');
      } else {
        this.http.post('http://localhost:3000/users', this.signupForm.value).subscribe(() => {
          alert('Signup successful!');
          this.router.navigate(['/login']);
        });
      }
    });
  }




   

}


  



