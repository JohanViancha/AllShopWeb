import { Component, Inject, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { LoginCredentials, LoginForm } from './models/login.models';
import { LoginService } from './services/login.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
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
    this.loginService.authenticateUser(loginCredentials).subscribe();
  }

  getErrorMessage() {
    if (this.user.get('email')!.hasError('required')) {
      return 'Debes ingresar un email';
    }

    return this.user.get('email')!.hasError('email')
      ? 'El email es invalido'
      : '';
  }
}
