import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {UrlAuth} from "../helpers/urlAuth";
import {Observable} from "rxjs";
import {ResponseAuth} from "../models/response-auth";
import {LoginForm} from "../models/login-form";
import {LocalStorageService} from "@core/storage/local-storage.service";
import {GlobalConstants} from "@core/consts/GlobalConst";
import {ToastrService} from "ngx-toastr";
import {PathService} from "@core/services/path.service";
import {UserModel} from "@core/models/user/user-model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private _httpClient: HttpClient,
    private _localStorageService: LocalStorageService,
    private _toasterService: ToastrService,
    private _pathService: PathService,
  ) {
  }

  postLogin(data: LoginForm): Observable<ResponseAuth> {
    return this._httpClient.post<ResponseAuth>(UrlAuth.urlLogin, data)
      .pipe(
        tap((res) => {
          this._localStorageService.setItem(GlobalConstants.LOCAL_STORAGE_ACCESS_TOKEN, res.accessToken);
          this._localStorageService.setItem(GlobalConstants.LOCAL_STORAGE_REFRESH_TOKEN, res.refreshToken);
          this._localStorageService.setItem(GlobalConstants.LOCAL_STORAGE_USER, res.user);
        }),
        tap(() => {
          this._toasterService.success('Bienvenido');
          this._pathService.redirectDashboard();
        })
      );
  }

  getCurrentUser() {
    const user = this._localStorageService.getItem<UserModel>(GlobalConstants.LOCAL_STORAGE_USER);
    return user!;
  }
}
