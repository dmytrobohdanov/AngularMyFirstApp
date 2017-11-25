import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ImageComponentComponent } from './image-component/image-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageComponentComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
