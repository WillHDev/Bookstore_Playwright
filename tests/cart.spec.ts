import { test, expect, type Page } from '@playwright/test';
//import { test, expect } from './fixtures/xyz';



test('Add item to cart', async ({ page }) => {
await page.goto('https://bookcart.azurewebsites.net/');

    //RESOLVED to 2 ELEMENTSawait expect(page.locator('span:has-text(" jjohnson")')).toBeVisible();
    // DOESNT WORK await expect(page.locator('span[text=" jjohnson"]')).toBeVisible();
    //await page.goto('https://bookcart.azurewebsites.net/');
    //await page.locator('mat-card.book-card:has-text("Harry Potter and the Prisoner of Azkaban")').locator('[role="img"]:has-text(" Add to Cart")').click();
    await page.locator('mat-card.book-card:has-text("Harry Potter and the Prisoner of Azkaban")')
    .locator('text=" Add to Cart "').click();

    await page.locator("(//span[@class='mat-mdc-button-touch-target'])[3]").click();
    
    await page.getByText('Checkout').click();

});
