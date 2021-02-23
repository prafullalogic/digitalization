
//angular
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

//rxjs
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

//third-party
import { LocalStorageService } from 'angular-2-local-storage';

//service
import { AuthService } from '../service/auth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _localStorageService: LocalStorageService, private _authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    var access_token = this._localStorageService.get("access_token");

    if (access_token != null) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${access_token}`
        }
      });
    }

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {

        if (error.status == 401) {
          this._authService.logout();
        }

        return throwError(error);
      }));;
  }
}
