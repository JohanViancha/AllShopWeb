import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { RegisterUser } from '../models/register.models';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ENDPOINT } from '../models/register.constants';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private httpModule: HttpClient = inject(HttpClient);

  registerUser(user: RegisterUser): Observable<any> {
    console.log(user)
    return this.httpModule.post<RegisterUser>(
      `${environment.URLAPI}${ENDPOINT.registerUser}`,
      user
    ).pipe(
      catchError((err)=>{
        throw err;
      })
    );
  }
}
