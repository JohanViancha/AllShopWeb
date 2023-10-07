import { Component, Inject, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from './services/login.service';
import { LoginCredentials, LoginForm } from './models/login.models';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private loginService = inject(LoginService);
  private router = inject(Router);
  user!: FormGroup<LoginForm>;
  hide = true;

  ngOnInit() {
    this.user = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  authenticateUser() {
    const loginCredentials: LoginCredentials = {
      email: this.user.get('email')?.value,
      password: this.user.get('password')?.value,
    };
    this.loginService
      .authenticateUser(loginCredentials)
      .pipe(tap(() => this.router.navigate(['/home'])))
      .subscribe();
  }

  getErrorMessage() {
    if (
      this.user.get('email')!.hasError('required') ||
      this.user.get('password')!.hasError('required')
    ) {
      return 'Should enter value this field';
    }

    return this.user.get('email')!.hasError('email') ? 'Email invalid' : '';
  }

  redirectCreate(){
    this.router.navigate(['register'])
  }
}
