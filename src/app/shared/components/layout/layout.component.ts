import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {UserModel} from "@core/models/user/user-model";
import {AuthService} from "@app/auth/service/auth.service";
import {UserQuery} from "@core/store/user.query";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isHandset$: Observable<boolean> = this._breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  user!: UserModel;

  constructor(
    private _breakpointObserver: BreakpointObserver,
    private _userQuery: UserQuery,
    private _authService: AuthService) {
    this.user = this._userQuery.getUser();
  }

  ngOnInit(): void {
  }

  logout() {
    this._authService.logout();
  }

}
