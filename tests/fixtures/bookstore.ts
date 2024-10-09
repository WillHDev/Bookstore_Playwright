import { test as base } from '@playwright/test';
import { ProductPage } from '../pages/product-page.ts';


type BookstoreFixtures = {

  productPage: ProductPage;

};

export const test = base.extend<BookstoreFixtures>({

  productPage: async ({ page }, use) => {
    await use(new ProductPage( page ));
  },

});

export { expect } from '@playwright/test';

