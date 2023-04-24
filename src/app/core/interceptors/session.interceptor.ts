import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, finalize, Observable, throwError} from 'rxjs';
import {SessionQuery} from "@app/auth/store/session.query";
import {map} from "rxjs/operators";
import {SessionService} from "@app/auth/store/session.service";

@Injectable()
export class SessionInterceptor implements HttpInterceptor {

  constructor(
    protected _sessionQuery: SessionQuery,
    private _sessionService: SessionService,
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let req = request;

    if (this._sessionQuery.isLoggedIn()) {
      req = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this._sessionQuery.getAccessToken()}`
        }
      });
    }

    return next.handle(req)
      .pipe(
        map((event: HttpEvent<any>) => {
          return event;
        }),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            this._sessionService.logout();
          }
          if (error.status === 500) {
            return throwError(() => Error('Error en el servidor'));
          }
          return throwError(() => Error(error.error.message));
        }),
        finalize(() => {
          //this.blockUiService.hide();
        })
      )
  }
}
