import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { LoginCredentials } from '../models/login.models';
import { environment } from 'src/environments/environment';
import { ENDPOINT } from '../models/login.constants';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private httpModule: HttpClient = inject(HttpClient);

  authenticateUser(credentials: LoginCredentials): Observable<any> {
    return this.httpModule.post<LoginCredentials>(
      `${environment.URLAPI}${ENDPOINT.authenticateUser}`,
      credentials
    ).pipe(
      catchError((err)=>{
        throw err;
      })
    );
  }
}
