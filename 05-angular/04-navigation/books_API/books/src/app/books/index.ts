import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookNewComponent } from './book-new/book-new.component';

export const components: any[] = [
  BookDetailComponent,
  BookListComponent,
  BookNewComponent,
];

// export individually - to help keep app module and routing module cleaner
export * from './book-detail/book-detail.component';
export * from './book-list/book-list.component';
export * from './book-new/book-new.component';
