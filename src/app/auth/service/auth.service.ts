import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs/operators";
import {UrlAuth} from "../helpers/urlAuth";
import {Observable} from "rxjs";
import {ResponseAuth} from "../models/response-auth";
import {LoginForm} from "../models/login-form";
import {LocalStorageService} from "@core/storage/local-storage.service";
import {GlobalConstants} from "@core/consts/GlobalConst";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private _httpClient: HttpClient,
    private _localStorageService: LocalStorageService,
    private _toasterService: ToastrService,
  ) {
  }

  postLogin(data: LoginForm): Observable<ResponseAuth> {
    return this._httpClient.post<ResponseAuth>(UrlAuth.urlLogin, data)
      .pipe(
        tap((result)=>{
          console.log(result);
        }),
        tap((res) => {
          this._localStorageService.setItem(GlobalConstants.LOCAL_STORAGE_ACCESS_TOKEN, res.accessToken);
          this._localStorageService.setItem(GlobalConstants.LOCAL_STORAGE_REFRESH_TOKEN, res.refreshToken);
        }),
        tap((res) => {
          this._toasterService.success('Bienvenido');
        }),
      );
  }
}
