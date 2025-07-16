import { Component } from '@angular/core';
import {Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit(): void {
    this.auth.login(this.email, this.password).subscribe({
      next: () => {
        console.log('✅ Login success');
        this.router.navigate(['/projects']);
      },
      error: (err: any) => {
        this.error = err.error?.message || 'Login failed';
        console.error('❌ Login error:', err);
      }
    });
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

}
