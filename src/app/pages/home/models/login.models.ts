import { FormControl } from '@angular/forms';


export interface LoginForm{
  email: FormControl<string | null>; 
  password: FormControl<string | null>;
}
export interface LoginCredentials {
  email: string | null | undefined;
  password: string | null | undefined;
}

export interface Endpoint {
  authenticateUser: string;
}
