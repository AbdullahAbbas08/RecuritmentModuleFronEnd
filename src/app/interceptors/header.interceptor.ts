import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const Toaken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBYWFhYWExMTEiLCJqdGkiOiIzMThhY2MzMC04OTc2LTRiY2ItOWI2NC02MDczNDgyOTRlMjciLCJVc2VySWQiOiI0NjBmNWQwOS1iMTI0LTQ2ZWQtYmJiZS1jOWNlM2Y3ZjY4MWMiLCJSb2xlIjoiQXBwbGljYW50IiwiZXhwIjoxNjczODQ2MTczLCJpc3MiOiJTZWN1cmVBcGkiLCJhdWQiOiJTZWN1cmVBcGlVc2VyIn0.mUrWWbziuffy6t2hG78-v7vkVRObTDVzGG6wqYqHzj4";
    const ModifiedRequest = request.clone({
      headers: request.headers.set('Authorization', Toaken)
    })

    return next.handle(ModifiedRequest);
  }
}
