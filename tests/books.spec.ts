import { test, expect } from './fixtures/bookstore';

test('Add item to cart', async ({ booksPage }) => {
// await page.goto('https://bookcart.azurewebsites.net/');

//should I call this page 'books' or cart?

//     //RESOLVED to 2 ELEMENTSawait expect(page.locator('span:has-text(" jjohnson")')).toBeVisible();
//     // DOESNT WORK await expect(page.locator('span[text=" jjohnson"]')).toBeVisible();
//     //await page.goto('https://bookcart.azurewebsites.net/');
//     //await page.locator('mat-card.book-card:has-text("Harry Potter and the Prisoner of Azkaban")').locator('[role="img"]:has-text(" Add to Cart")').click();
//     await page.locator('mat-card.book-card:has-text("Harry Potter and the Prisoner of Azkaban")')

    await booksPage.load();
    await booksPage.addToCart("Harry Potter and the Prisoner of Azkaban");
    await booksPage.goToCheckout();

});