import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import {finalize, Observable} from 'rxjs';
import {SessionQuery} from "@app/auth/store/session.query";
import {map} from "rxjs/operators";
import {SessionService} from "@app/auth/store/session.service";
import {NgxUiLoaderService} from "ngx-ui-loader";

@Injectable()
export class SessionInterceptor implements HttpInterceptor {
  private activeRequests = 0;

  constructor(
    protected _sessionQuery: SessionQuery,
    private _sessionService: SessionService,
    private _loaderService: NgxUiLoaderService,
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

    if (this.activeRequests === 0) this._loaderService.start();
    this.activeRequests++;

    return next.handle(req)
      .pipe(
        map((event: HttpEvent<any>) => {
          return event;
        }),
        finalize(() => {
          this.stopLoading();
        })
      )
  }

  private stopLoading(): void {
    this.activeRequests--;
    if (this.activeRequests === 0) this._loaderService.stop();
  }
}
