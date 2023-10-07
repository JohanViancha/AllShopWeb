import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RegisterForm, RegisterUser } from './models/register.models';
import { RegisterService } from './services/register.service';
import { tap } from 'rxjs';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { recordCreatedSuccessfully } from 'src/app/shared/components/modal/models/modal.constant';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    NgIf,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  private registerService = inject(RegisterService);
  private router = inject(Router);
  public dialog = inject(MatDialog);
  private readonly fb = inject(NonNullableFormBuilder);
  public user!: FormGroup<RegisterForm>;
  hide = true;

  ngOnInit() {
    const fb = new FormBuilder();

    this.user = fb.group({
      name: ['', [Validators.required]],
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  getErrorMessage() {
    if (
      this.user.get('email')!.hasError('required') ||
      this.user.get('name')!.hasError('required') ||
      this.user.get('lastname')!.hasError('required') ||
      this.user.get('password')!.hasError('required')
    ) {
      return 'Should enter value this field';
    }

    return this.user.get('email')!.hasError('email') ? 'Email invalid' : '';
  }

  registerUser() {
    const user: RegisterUser = {
      name: this.user.get('name')?.value!,
      lastname: this.user.get('lastname')?.value!,
      email: this.user.get('email')?.value!,
      password: this.user.get('password')?.value!,
    };
    this.registerService
      .registerUser(user)
      .pipe(
        tap(() =>
          this.dialog.open(ModalComponent, {
            data: recordCreatedSuccessfully,
          })
        ),
        tap(() => this.user.reset())
      )
      .subscribe();
  }

  returnLogin() {
    this.router.navigate(['login']);
  }
}
