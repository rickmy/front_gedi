import { Injectable } from '@angular/core';
import {UserStore} from "@core/store/user.store";
import {UserModel} from "@core/models/user/user-model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _userStore: UserStore) { }

  setUser(user: UserModel) {
    this._userStore.setUser(user);
  }
  resetUser() {
    this._userStore.resetUser();
  }
}
