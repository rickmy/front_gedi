import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {ToastrService} from "ngx-toastr";
import {AuthService} from "@app/auth/service/auth.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private _toasterService: ToastrService,
    private _authService: AuthService,
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.status === 401) {
          this._toasterService.error('No autorizado');
          this._authService.logout();
          return throwError(() => errorMessage);
        }
        if (error.error instanceof ErrorEvent) {
          console.error('An error occurred:', error.error.message);
          errorMessage = `Error: ${error.error.message}`;
        } else {
          console.error('Backend returned code ', error.status, 'body was: ', error.error)
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        this._toasterService.error(errorMessage);
        return throwError(() => errorMessage);
      })
    );
  }
}
