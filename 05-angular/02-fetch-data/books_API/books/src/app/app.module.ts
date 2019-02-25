// defaults during project creation
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// import the forms module to extend Angular's capabilities
// Tell Angular about the extension by adding this module to the imports array below
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule], // need to use the content it provides to work with the rendered form
  providers: [], // the  ngmodule
  bootstrap: [AppComponent],
})
export class AppModule {}
