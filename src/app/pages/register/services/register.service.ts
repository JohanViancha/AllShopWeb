import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { RegisterUser } from '../models/register.models';
import { Observable, catchError } from 'rxjs';
import { ENDPOINT } from '../models/register.constants';
import { URLAPI } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private httpModule: HttpClient = inject(HttpClient);

  registerUser(user: RegisterUser): Observable<any> {
    return this.httpModule.post<RegisterUser>(
      `${URLAPI}${ENDPOINT.registerUser}`,
      user
    ).pipe(
      catchError((err)=>{
        throw err;
      })
    );
  }
}
