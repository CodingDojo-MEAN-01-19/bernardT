import { Component, OnInit } from '@angular/core';

import { Book } from '../../models'; // references only the directory because of the bailing file
// (import { Book } from './models/book.model';) - without bailing
// import { BOOKS } from '../../data';
import { BookService } from '../../services'; // use of bailing using index.ts
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  // empty array for collecting books created using entry form
  books: Book[] = []; // BOOKS if not using service
  selectedBook: Book;

  // reference the injected bookservice into the constructor
  constructor(private readonly bookService: BookService) {}

  ngOnInit() {
    console.log(this.bookService);
    // passing book data from API
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
  }
  // observables are streams of information
  // Angular always gives back an observable when a content is required thru an API
  // Convert the array of books into an API call
  // onCreate(event: Book) {
  //   console.log('creating', event);
  //   this.books.push(event);
  // }

  onCreate(book: Book) {
    console.log('creating book', book);
    this.bookService.createBook(book).subscribe(newBook => {
      // this.books.push(newBook);
      // ... spread operator, takes all books and turn them into comma seperated values
      this.books = [...this.books, newBook];
      console.log('new book', newBook);
    });
  }

  onSelect(book: Book) {
    console.log('selecting a book', book);

    this.selectedBook = this.selectedBook === book ? null : book;

    // if (this.selectedBook === book) {
    //   this.selectedBook = null;
    // } else {
    //   this.selectedBook = book;
    // }
  }

  // removes a book from the book array
  onDelete(book: Book) {
    console.log('deleting book', book);

    this.bookService.removeBook(book._id).subscribe(deletedBook => {
      console.log(deletedBook);
      this.books = this.books.filter(b => b._id !== deletedBook._id);
    });
  }

  onClick(event: Event) {
    event.stopPropagation();
    console.log('clicking triggered');
  }
}
