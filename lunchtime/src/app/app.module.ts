import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OptionActivePipe } from './pipes/option-active.pipe';
import { AvailablePipe } from './pipes/available.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ChartsModule } from 'ng2-charts/ng2-charts';

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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
