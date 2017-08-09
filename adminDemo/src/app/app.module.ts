import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {WelcomeComponent} from './home/welcome.component';
import {LogbookModule} from "./logbook/logbook.module";

@NgModule({
  imports: [
    BrowserModule, HttpClientModule,
    LogbookModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
