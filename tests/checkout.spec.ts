import { test, expect, page } from './fixtures/bookstore';

test('Add item to cart', async ({ page }) => {
    await page.goto('https://bookcart.azurewebsites.net/checkout');
    await page.getByPlaceholder('Name').fill('John'); 
    await page.getByPlaceholder('Address Line 1').fill('3600 Portland Avenue');
    await page.getByPlaceholder('Address Line 2').fill('Apt B');
    await page.getByPlaceholder('Pincode').fill('160402');
    await page.getByPlaceholder('State').fill('CT');
    await page.getByText('Place Order').click();
    await expect(page).toHaveURL(/myorders/);
    // const date = new Date()
    // await expect(page.locator('[class="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-orderedOn mat-column-orderedOn ng-tns-c917493871-8 ng-star-inserted"]')
    // .nth(1).toContain(`/${new Date()}$/`);
});