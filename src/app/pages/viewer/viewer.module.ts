import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ViewerRoutingModule} from './viewer-routing.module';
import {VisualizerComponent} from './visualizer/visualizer.component';
import {ViewerComponent} from "@pages/viewer/viewer/viewer.component";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    VisualizerComponent,
    ViewerComponent
  ],
  imports: [
    CommonModule,
    ViewerRoutingModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class ViewerModule {
}
