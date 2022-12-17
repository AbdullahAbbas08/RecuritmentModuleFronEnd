import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { SharedMethodsService } from '../shared/services/shared-methods.service';
import { GenericResponse } from '../shared/models/generic-response';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private SharedMethods:SharedMethodsService) {}

  intercept(request: HttpRequest<GenericResponse<any>>, next: HttpHandler): Observable<HttpEvent<GenericResponse<any>>> {

    return next.handle(request).pipe(catchError((err)=>{
      console.log(err);
      this.SharedMethods.ErrorMessage(err.message);
      return of(err)
    }));
  }
}
