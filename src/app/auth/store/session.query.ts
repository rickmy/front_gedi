import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import {SessionState, SessionStore} from "@app/auth/store/session.store";

@Injectable({ providedIn: 'root' })
export class SessionQuery extends Query<SessionState> {
  isLoggedIn$ = this.select(state => !!state.accessToken);
  accessToken$ = this.select(state => state.accessToken);
  refreshToken$ = this.select(state => state.refreshToken);
  constructor(protected override store: SessionStore) {
    super(store);
  }
  isLoggedIn(): boolean {
    return !!this.getValue().accessToken;
  }
  getAccessToken(): string {
    return this.getValue().accessToken!;
  }
  getRefreshToken(): string {
    return this.getValue().refreshToken!;
  }
}
