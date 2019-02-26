import { Component, OnInit } from '@angular/core';

import { Book } from '../../models'; // references only the directory because of the bailing file
// (import { Book } from './models/book.model';) - without bailing
import { BOOKS } from '../../data';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  // empty array for collecting books created using entry form
  books: Book[] = BOOKS;
  selectedBook: Book;

  constructor() {}

  ngOnInit() {}

  onCreate(event: Book) {
    console.log('creating', event);
    this.books.push(event);
  }

  onSelect(book: Book) {
    console.log('selecting', book);
    // ternary operation
    // this.selectedBook = (some expression)       ? true : false;
    this.selectedBook = this.selectedBook === book ? null : book;
    // ***alternative approach
    // if (this.selectedBook === book) {
    //   this.selectedBook = null;
    // } else {
    //   this.selectedBook = book;
    // }
  }
}
