import {Injectable} from "@angular/core";
import {Store, StoreConfig} from "@datorama/akita";
import {GlobalConstants} from "@core/consts/GlobalConst";
import {LocalStorageService} from "@core/storage/local-storage.service";

export interface SessionState {
  accessToken: string | null;
  refreshToken: string | null;
}

export function createInitialState(): SessionState {
  return {
    accessToken: null,
    refreshToken: null,
  }
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'session'})
export class SessionStore extends Store<SessionState> {
  constructor(
    private _localStorageService: LocalStorageService,
  ) {
    super(createInitialState());
  }

  updateLogin(response: SessionState) {
    this._localStorageService.setItem(GlobalConstants.LOCAL_STORAGE_ACCESS_TOKEN, response.accessToken);
    this._localStorageService.setItem(GlobalConstants.LOCAL_STORAGE_REFRESH_TOKEN, response.refreshToken);
    this.update(response);
  }

  updateAccessToken(accessToken: string) {
    this.update({accessToken});
  }

  updateRefreshToken(refreshToken: string) {
    this.update({refreshToken});
  }

  updateLogout() {
    this._localStorageService.clear();
    this.update(createInitialState());
  }
}
