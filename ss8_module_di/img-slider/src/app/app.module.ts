import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ImgSliderModule} from "./img-slider/img-slider.module";
import {ImgSliderRoutingModule} from "./img-slider/img-slider-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImgSliderModule,
    ImgSliderRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
