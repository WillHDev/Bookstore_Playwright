import { test, expect } from './fixtures/bookstore';

test('Add item to cart', async ({ booksPage, page }) => {
    await booksPage.load();
    //await page.locator()
    await page.locator(`mat-card.book-card:has-text("A Dance with Dragons")`)
    .locator('app-addtowishlist').click();
});