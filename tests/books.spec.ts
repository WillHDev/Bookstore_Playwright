import { test, expect } from './fixtures/bookstore';

test.describe('Books Page', () => {
    test('Add item to cart', async ({ booksPage }) => {
        await booksPage.load();
        await booksPage.addToCart("Harry Potter and the Prisoner of Azkaban");
        await booksPage.goToCheckout();
    });
});