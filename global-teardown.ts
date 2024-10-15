import { Browser, chromium, expect, Page } from '@playwright/test';

//browser.close()

async function globalTeardown() {
    //await page.close()
    await browser.close();
}

export default globalTeardown;

