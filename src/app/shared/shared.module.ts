import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './components/layout/layout.component';
import {LayoutModule} from '@angular/cdk/layout';
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppModule} from "@app/app.module";
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [LayoutComponent, NavbarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    LayoutModule,
    RouterModule,
  ],
  exports: [
    LayoutComponent
  ]
})
export class SharedModule { }
