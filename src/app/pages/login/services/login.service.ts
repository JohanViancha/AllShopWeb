import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { LoginCredentials } from '../models/login.models';
import { ENDPOINT } from '../models/login.constants';
import { Observable, catchError } from 'rxjs';
import { URLAPI } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private httpModule: HttpClient = inject(HttpClient);

  authenticateUser(credentials: LoginCredentials): Observable<any> {
    return this.httpModule.post<LoginCredentials>(
      `${URLAPI}${ENDPOINT.authenticateUser}`,
      credentials
    ).pipe(
      catchError((err)=>{
        throw err;
      })
    );
  }
}
