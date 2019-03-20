import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router'; // injected into component as a dependency.  place in constructor below

import { Book } from '../../models';
import { BookService } from '../../services'; // takes id from url and send it to book service, then request the book from the API

import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  @Input()
  book: Book;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly bookService: BookService
  ) {}

  // communicate with activated route
  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('book_id')),
        switchMap(id => this.bookService.showBook(id))
      )
      .subscribe(book => {
        console.log('book', book);
        this.book = book;
      });
  }
}

// ngOnInit() {
//   this.route.paramMap.subscribe(params => {
//     console.log(params.get('id'));
//     this.bookService.showBook(params.get('id'))
//       .subscribe(book => {
//       console.log('book', book);
//       this.book = book;
//     });
//   });
// }
// }
