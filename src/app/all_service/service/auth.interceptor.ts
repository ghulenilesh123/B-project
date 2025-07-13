import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    // console.log("Hello I am in the interceptor");

    let myToken = sessionStorage.getItem('token');
    console.log(myToken);
    
    console.log(request);

    const modifiedRequest = request.clone({
      setHeaders:{
        'Content-Type':'application/json',
        'JWTToken':'6dcba45g39cf6h89floghh55ff77'
      }
    })

    console.log(modifiedRequest);

    return next.handle(modifiedRequest).pipe(
      tap((event: HttpEvent<any>)=>{
        console.log(event);
      })
    );
  }
}
