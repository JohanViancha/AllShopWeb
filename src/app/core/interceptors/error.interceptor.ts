import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import {
  errorCode,
  modalNotValid,
} from '../../shared/components/modal/models/modal.constant';
import { Modal } from 'src/app/shared/components/modal/models/modal.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ResponseHtpp } from '../models/response.model';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private listError = new Map<number, Modal>([
    [errorCode.invalidCredentials, modalNotValid],
  ]);

  constructor(public dialog: MatDialog){

  }
  
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(({error}: HttpErrorResponse) => {
        this.dialog.open(ModalComponent,{
          data: this.listError.get(error.codeResponse)
        })
        throw error;
      })
    );
  }
}
