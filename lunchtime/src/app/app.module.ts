import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OptionActivePipe } from './pipes/option-active.pipe';
import { AvailablePipe } from './pipes/available.pipe';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ColorPickerModule } from 'angular4-color-picker'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OptionActivePipe,
    AvailablePipe
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
