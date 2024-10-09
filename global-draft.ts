// import { Browser, chromium, expect, Page } from '@playwright/test';

// async function globalSetup() {
//     const browser: Browser = await chromium.launch({ headless: false });
//     const context = await browser.newContext();
//     const page: Page = await context.newPage();

//     await page.goto('https://bookcart.azurewebsites.net/login');
//     await page.getByPlaceholder('Username').fill('jjohnson');
//     await page.getByPlaceholder('Password').fill('Jack123');
//     await page.locator('mat-card-actions').getByRole('button', { name: 'Login' }).click();
//     await expect(page.locator('span:has-text(" jjohnson')).toBeVisible();
//     // await page.getByText('Customer Login').click();
//     // await page.locator('select.form-control').selectOption('Ron Weasly');
//     // await page.getByRole('button', { name: 'Login' }).click()
//     // await expect(page.locator('.fontBig.ng-binding')).toHaveText('Ron Weasly');

//     // await page.context().storageState({ path: "./LoginAuth.json" });
//     // await browser.close();
// }

// export default globalSetup;