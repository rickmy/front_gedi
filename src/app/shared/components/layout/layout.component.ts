import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {UserModel} from "@core/models/user/user-model";
import {AuthService} from "@app/auth/service/auth.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  isHandset$: Observable<boolean> = this._breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  user!: UserModel;

  constructor(private _breakpointObserver: BreakpointObserver, private _authService: AuthService) {
    this.user = this._authService.getCurrentUser();
  }

}
