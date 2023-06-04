import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { SharedModule } from '@shared/shared.module';
import { SessionInterceptor } from "@core/interceptors/session.interceptor";
import { ErrorInterceptor } from "@core/interceptors/error.interceptor";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
    ToastModule,
    NgxUiLoaderModule.forRoot({
      "bgsColor": "red",
      "bgsOpacity": 0.5,
      "bgsPosition": "bottom-right",
      "bgsSize": 60,
      "bgsType": "ball-spin-clockwise",
      "blur": 7,
      "delay": 0,
      "fastFadeOut": true,
      "fgsColor": "#7f7f88",
      "fgsPosition": "center-center",
      "fgsSize": 100,
      "fgsType": "three-strings",
      "gap": 24,
      "logoPosition": "center-center",
      "logoSize": 120,
      "logoUrl": "",
      "masterLoaderId": "master",
      "overlayBorderRadius": "0",
      "overlayColor": "rgba(40,40,40,0.77)",
      "pbColor": "#6b6b76",
      "pbDirection": "ltr",
      "pbThickness": 3,
      "hasProgressBar": true,
      "text": "",
      "textColor": "#FFFFFF",
      "textPosition": "center-center",
      "maxTime": -1,
      "minTime": 300
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SessionInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
