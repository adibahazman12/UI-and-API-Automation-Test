class CartPage {
    constructor(page) {
        this.page = page;
        this.cartPageTitle = 'li.active';
        this.proceedToCheckoutButton = 'a.btn.btn-default.check_out';
    }

    async verifyCartPageDisplayed() {
        await this.page.locator(this.cartPageTitle).filter({ hasText: 'Shopping Cart' }).isVisible();
    }

    async clickProceedToCheckout() {
        await this.page.locator(this.proceedToCheckoutButton).click();
    }
}

module.exports = { CartPage };