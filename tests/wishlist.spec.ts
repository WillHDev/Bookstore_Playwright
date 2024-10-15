import { test, expect } from './fixtures/bookstore';

test.describe('Wishlist', () => {
    test('Add item to wishlist', async ({ booksPage, page }) => {
        await booksPage.load();
        const dragonsBook = await page.locator(`mat-card.book-card:has-text("A Dance with Dragons")`)
                    .locator('app-addtowishlist');
        await dragonsBook.click();
        await page.locator(`(//span[@class='mat-mdc-button-touch-target'])[2]`).click();
    });

    test('Remove item from wishlist', async ({ booksPage, page }) => {
        await booksPage.load();
        const dragonsBook = await page.locator(`mat-card.book-card:has-text("A Dance with Dragons")`)
                    .locator('app-addtowishlist');
        await dragonsBook.click();
        await page.locator(`(//span[@class='mat-mdc-button-touch-target'])[2]`).click();
        const dragonsBookFromWishList =  await page.locator('.cdk-row:has-text("A Dance with Dragons")');
        await dragonsBookFromWishList.locator('text="Remove from Wishlist"').click();
        await expect(dragonsBookFromWishList).not.toBeVisible();
    });
});