import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import * as fromBooks from './books';

const enableTracing = true && !environment.production; // in a non-production environment this remains false

// creating route paths
const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full',
  },
  {
    path: 'books',
    children: [
      {
        path: '',
        component: fromBooks.BookListComponent,
      },
      {
        path: 'new',
        component: fromBooks.BookNewComponent,
      },
      {
        path: ':id',
        component: fromBooks.BookDetailComponent,
      },
    ],
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
