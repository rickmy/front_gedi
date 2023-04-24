import {UserModel} from "@core/models/user/user-model";
import {Injectable} from "@angular/core";
import {Store, StoreConfig} from "@datorama/akita";
import {LocalStorageService} from "@core/storage/local-storage.service";
import {GlobalConstants} from "@core/consts/GlobalConst";

export function createInitialState(): UserModel {
  return {
    id: 0,
    name: '',
    lastName: '',
    email: '',
    username: '',
    userCode: '',
    role: {
      id: 0,
      name: '',
    },
    career: null,
    state: false,
    careerId: 0,
    roleId: 0,
    emailVerifiedAt: null,
    Documents: [],
  }
}


@Injectable({providedIn: 'root'})
@StoreConfig({name: 'user'})
export class UserStore extends Store<UserModel> {
  constructor(
    private _localStorageService: LocalStorageService,
  ) {
    super(createInitialState());
  }

  setUser(response: UserModel) {
    this._localStorageService.setItem(GlobalConstants.LOCAL_STORAGE_USER, response);
    this.update(response);
  }

  resetUser() {
    this._localStorageService.clear();
    this.update(createInitialState());
  }
}
