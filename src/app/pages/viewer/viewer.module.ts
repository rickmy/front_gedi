import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ViewerRoutingModule} from './viewer-routing.module';
import {VisualizerComponent} from './visualizer/visualizer.component';
import {ViewerComponent} from "@pages/viewer/viewer/viewer.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    VisualizerComponent,
    ViewerComponent
  ],
  imports: [
    CommonModule,
    ViewerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ViewerModule {
}
