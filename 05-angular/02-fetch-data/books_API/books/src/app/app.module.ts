// defaults during project creation
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// import the forms module to extend Angular's capabilities
// Tell Angular about the extension by adding this module to the imports array below
import { FormsModule } from '@angular/forms';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookNewComponent } from './books/book-new/book-new.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';

@NgModule({
  declarations: [AppComponent, BookListComponent, BookNewComponent, BookDetailComponent],
  imports: [BrowserModule, FormsModule], // need to use the content it provides to work with the rendered form
  providers: [], // the  ngmodule
  bootstrap: [AppComponent],
})
export class AppModule {}
