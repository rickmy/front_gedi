import { Injectable } from '@angular/core';
import {SessionStore} from "@app/auth/store/session.store";
import {UserModel} from "@core/models/user/user-model";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private _sessionStore: SessionStore,
  ) { }
  login(accessToken: string, refreshToken: string) {
    this._sessionStore.updateLogin({accessToken, refreshToken});
  }
  logout() {
    this._sessionStore.updateLogout();
  }
}
