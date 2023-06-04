import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {UrlAuth} from "../helpers/urlAuth";
import {Observable} from "rxjs";
import {ResponseAuth} from "../models/response-auth";
import {PathService} from "@core/services/path.service";
import {Credentials} from "@app/auth/models/login-form";
import {SessionService} from "@app/auth/store/session.service";
import {UserService} from "@core/store/user.service";
import {ToastrService} from "@shared/services/toastr.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private _httpClient: HttpClient,
    private _toasterService: ToastrService,
    private _pathService: PathService,
    private _sessionService: SessionService,
    private _userService: UserService,
  ) {
  }

  postLogin(data: Credentials): Observable<ResponseAuth> {
    return this._httpClient.post<ResponseAuth>(UrlAuth.urlLogin, data)
      .pipe(
        tap((res) => {
          this._sessionService.login(res.accessToken!, res.refreshToken!);
          this._userService.setUser(res.user!);
        }),
        tap(() => {
          this._toasterService.success('Bienvenido');
          this._pathService.redirectDashboard();
        })

      );
  }

  logout() {
    this._sessionService.logout();
    this._userService.resetUser();
    this._toasterService.success('Sesión cerrada');
    this._pathService.redirectLogin();
  }

}
