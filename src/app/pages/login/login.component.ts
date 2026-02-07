import {Component, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  access_token?: string;
  // Add other response fields your API returns
}

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = signal(false);
  errorMessage = signal('');

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.markFormGroupTouched(this.loginForm);
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set('');

    const loginData: LoginRequest = {
      email: this.loginForm.value.username,
      password: this.loginForm.value.password
    };

    this.http.post<LoginResponse>(
      'http://localhost:8080/api/auth/login',
      loginData,
      { withCredentials: true }
    ).subscribe({
      next: (response) => {
        console.log('Login successful', response);

        this.router.navigate(['/profile']).then(
          navigated => {
            if (!navigated) {
              console.warn('Navigation was blocked or failed');
              this.errorMessage.set('Could not navigate to profile page.');
            }
          }
        ).catch(error => {
          console.error('Navigation error:', error);
          this.errorMessage.set('Navigation failed. Please try again.');
        });
      },
      error: (error: HttpErrorResponse) => {
        this.isLoading.set(false);
        if (error.status === 401) {
          this.errorMessage.set('Invalid username or password');
        } else if (error.status === 0) {
          this.errorMessage.set('Cannot connect to server. Please check your connection.');
        } else {
          this.errorMessage.set(error.error?.message || 'Login failed. Please try again.');
        }
        console.error('Login error:', error);
      },
      complete: () => {
        this.isLoading.set(false);
      }
    });
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
