import { Injectable } from '@angular/core';
// a decorator that is avaible without the need to export.  It is available globally to the app

// of takes some content and transform into an observable
import { of, Observable } from 'rxjs';

// create a dependency of BookServce
import { HttpClient } from '@angular/common/http';

// import { BOOKS } from '../data'; // BOOKS array now available

import { Book } from '../models';
// import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

// In order for a component to have access to a service, it has to be injected
// using dependency injection:
@Injectable({
  providedIn: 'root',
})
export class BookService {
  // private readonly base = 'http://59498bce6d49df0011102cfc.mockapi.io/books';
  private readonly base = '/api/books';

  constructor(private readonly http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.base);
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.base}/${id}`);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.base, book);
  }

  removeBook(id: string): Observable<Book> {
    return this.http.delete<Book>(`${this.base}/${id}`);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.base}/${book._id}`, book);
  }
}
