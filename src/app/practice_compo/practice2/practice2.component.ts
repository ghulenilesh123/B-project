import { Component, ContentChild, ElementRef, HostBinding, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practice2',
  templateUrl: './practice2.component.html',
  styleUrls: ['./practice2.component.css']
})
export class Practice2Component {

loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const { username, password } = this.loginForm.value;

    this.http.get<any[]>(`http://localhost:3000/users?username=${username}&password=${password}`)
      .subscribe(users => {
        if (users.length > 0) {
          alert('Login successful!');
          this.router.navigateByUrl('home')
          // Redirect or set login state here
        } else {
          alert('Invalid username or password!');
        }
      });
  }
}
