
import { type Locator, type Page } from '@playwright/test';

export class WishlistPage {
  readonly page: Page;
  readonly miniCart: Locator;
  readonly checkoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.miniCart =  page.locator("(//span[@class='mat-mdc-button-touch-target'])[3]");
    this.checkoutBtn = page.getByText('Checkout');
    }

    async load() {
        await this.page.goto('https://bookcart.azurewebsites.net/wishlist');
    }

    async addToCart( book: string ) {
        console.log(book);
        await this.page.locator(`mat-card.book-card:has-text("${book}")`)
                    .locator('text=" Add to Cart "').click();
    }

    async goToCheckout( ) {
        await this.miniCart.click();
        await this.checkoutBtn.click();
    }

    async isAscendingOrder (prices: string[]) {
        for (let i = 0; i < prices.length - 1; i++) {
            if (prices[i] > prices[i + 1]) {
                return false;
            }
        }
        return true;
    }
}










