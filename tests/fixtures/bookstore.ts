import { test as base } from '@playwright/test';
import { BooksPage } from '../pages/books-page.ts';


type BookstoreFixtures = {

  booksPage: BooksPage;

};

export const test = base.extend<BookstoreFixtures>({

  booksPage: async ({ page }, use) => {
    await use(new BooksPage( page ));
  },

});

export { expect } from '@playwright/test';

