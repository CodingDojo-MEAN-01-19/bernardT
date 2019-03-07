// defaults during project creation
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// import the forms module to extend Angular's capabilities
// Tell Angular about the extension by adding this module to the imports array below
import { FormsModule } from '@angular/forms';

import * as fromBooks from './books'; // fromBooks is a variable pointing to the books index.ts file

import { SearchPipe } from './search.pipe';

import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    ...fromBooks.components,
    NavComponent,
  ], // spread the contents of the components array
  // need to use the content it provides to work with the rendered form
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [], // the  ngmodule
  bootstrap: [AppComponent],
})
export class AppModule {}
