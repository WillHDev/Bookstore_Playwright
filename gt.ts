import { Browser, chromium, expect, Page } from '@playwright/test';

async function globalTeardown(page) {
    await page.close()
    //await browser.close();
}

export default globalTeardown;

