import { FormControl } from '@angular/forms';

export interface RegisterForm {
  name: FormControl<string | null>;
  lastname: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

export interface RegisterUser {
  name: string;
  lastname: string;
  email: string;
  password: string;
}



export interface Endpoint {
    registerUser: string;
  }
