import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Book } from '../../models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css'],
})
export class BookNewComponent implements OnInit {
  // create an instance variable of the Book class, and invoke it to be a new Book object
  // ngmodel this will be used to associate book with all the input fields in the form
  book = new Book();

  @Output()
  createBook = new EventEmitter<Book>();
  constructor() {}

  ngOnInit() {}

  // event: Event is a custom data type.  default is any, which does not list methods for event.
  // form: NgForm for accepting the bookForm object
  onCreate(event: Event, form: NgForm) {
    event.preventDefault(); // prevents the default form action to submit info somewhere.

    console.log('submitting form', this.book); // book object passed from binding and reference
    // this.books.push(this.book); // books passed can be collected into the books array
    this.createBook.emit(this.book);
    this.book = new Book(); // break binding reference to prevent creating empty records, since the form is reset below
    // Use form to reset
    form.reset();
  }
}
