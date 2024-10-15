import { test as base } from '@playwright/test';
import { BooksPage } from '../pages/books-page.ts';
import { CheckoutPage } from '../pages/checkout-page.ts';

type BookstoreFixtures = {

  booksPage: BooksPage;
  checkoutPage: CheckoutPage;

};

export const test = base.extend<BookstoreFixtures>({

  booksPage: async ({ page }, use) => {
    await use(new BooksPage( page ));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage( page ));
  },

});

export { expect } from '@playwright/test';

