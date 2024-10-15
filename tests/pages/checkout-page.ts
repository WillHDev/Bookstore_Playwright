
import { type Locator, type Page, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly placeOrderBtn: Locator;



  constructor(page: Page) {
    this.page = page;
    this.placeOrderBtn =  page.getByText('Place Order');
   
    }

    // async load() {
    //     await this.page.goto('https://bookcart.azurewebsites.net/');
    // }

    async checkout( name: string, addressLine1: string, addressLine2: string , pinCode: string, state: string ) {
        
        await this.page.getByPlaceholder('Name').fill(name); 
        await this.page.getByPlaceholder('Address Line 1').fill(addressLine1);
        await this.page.getByPlaceholder('Address Line 2').fill(addressLine2);
        await this.page.getByPlaceholder('Pincode').fill(pinCode);
        await this.page.getByPlaceholder('State').fill(state);
        await this.placeOrderBtn.click();
        await expect(this.page).toHaveURL(/myorders/);
    }

    // async goToCheckout( ) {
    //     await this.miniCart.click();
    //     await this.checkoutBtn.click();
    // }



}
