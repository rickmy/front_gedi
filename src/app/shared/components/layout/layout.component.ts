import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable, Subject, takeUntil} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {UserModel} from "@core/models/user/user-model";
import {AuthService} from "@app/auth/service/auth.service";
import {UserQuery} from "@core/store/user.query";
import {SettingsService} from "@core/services/api/settings.service";
import {DocumentType, SubTypeDocument} from "@core/models/documents/document-type";
import {PathService} from "@core/services/path.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  isHandset$: Observable<boolean> = this._breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  title = 'Sistema de Gestión Documental';
  destroy$: Subject<void> = new Subject<void>();
  user!: UserModel;
  typeDocuments: DocumentType[] = [];
  subTypeDocuments: SubTypeDocument[] = [];

  constructor(
    private _breakpointObserver: BreakpointObserver,
    private _userQuery: UserQuery,
    private _authService: AuthService,
    private _settingsService: SettingsService,
    public pathService: PathService
  ) {
    this.user = this._userQuery.getUser();
  }

  ngOnInit(): void {
    this.getSettings();
  }

  getSettings() {
    this._settingsService.getTypeDocument()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(
        (res) => {
          this.typeDocuments = res;
        }
      );
  }

  selectedItem(item: DocumentType) {
    console.log(item);
    this.subTypeDocuments = item.subTypeDocument!;
  }

  logout() {
    this._authService.logout();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
