import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PathService {
  readonly dashboardPath = '/dashboard';
  readonly authPath = '/auth';
  readonly viewerPath = '/viewer';

  readonly loginPath = this.authPath + '/login';

  constructor(
    private router: Router,
  ) {
  }

  redirectDashboard() {
    this.router.navigate([this.dashboardPath]);
  }

  redirectLogin() {
    this.router.navigate([this.loginPath]);
  }
}
