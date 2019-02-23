import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpService } from './http.service';

import { HttpClientModule } from '@angular/common/http';

// create a decorator with options objects

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [HttpService], // services
  bootstrap: [AppComponent], // entry point
})
export class AppModule {}
