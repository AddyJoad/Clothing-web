import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MidpageComponent } from './midpage/midpage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NextpageComponent } from './nextpage/nextpage.component';
import { SignpageComponent } from './signpage/signpage.component';

@NgModule({
  declarations: [
    AppComponent,
    MidpageComponent,
    NextpageComponent,
    SignpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
