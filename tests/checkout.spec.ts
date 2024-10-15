import { test, expect, booksPage, checkoutPage } from './fixtures/bookstore';

test('Checkout items in cart', async ({ booksPage, checkoutPage, page }) => {
    await booksPage.load();
    await booksPage.addToCart("Harry Potter and the Prisoner of Azkaban");
    await booksPage.goToCheckout();
    const { name, addressLine1, addressLine2, pinCode, state } = user1
    await checkoutPage.checkout( name, addressLine1, addressLine2, pinCode, state );
    await expect(page).toHaveURL(/myorders/);
});

const user1 = {
    name: 'John',
    addressLine1: '3600 Portland Avenue',
    addressLine2: 'Apt B',
    pinCode: '160402',
    state: 'CT'
  }