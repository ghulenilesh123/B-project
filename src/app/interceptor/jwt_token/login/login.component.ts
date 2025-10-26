import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone:true,
  imports:[FormsModule,CommonModule,ReactiveFormsModule]
})
export class LoginComponent {
     loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthServiceService) {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  onLogin() {
    const email = this.loginForm.value.email.trim().toLowerCase();
    const password = this.loginForm.value.password.trim();

    this.authService.login(email, password).subscribe({
      next: (res) => {
        console.log('Login Success:', res);
        localStorage.setItem('token', res.accessToken);
      },
      error: (err) => {
        console.log('Login Failed:', err);
        this.errorMessage = 'Invalid email or password.';
      }
    });
  }
}
