import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import * as fromBooks from './books';

const enableTracing = true && !environment.production; // in a non-production environment this remains false

// creating route paths
const routes: Routes = [
  {
    path: '',
    component: fromBooks.BookListComponent,
  },
  {
    path: 'books/new',
    component: fromBooks.BookNewComponent,
  },
  {
    path: 'books/:id',
    component: fromBooks.BookDetailComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing, // enable everything the router is doing
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// import this module in the app.module.ts
