import {Component, NgZone} from '@angular/core';
import {akitaDevtools, persistState} from "@datorama/akita";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private ngZone: NgZone) {
    akitaDevtools(ngZone);
    persistState();
  }
}
