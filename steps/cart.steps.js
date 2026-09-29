const { CartPage } = require('../pages/CartPage');

class CartSteps {
    constructor(page) {
        this.cartPage = new CartPage(page);
    }

    async verifyCartPageDisplayed() {
        await this.cartPage.verifyCartPageDisplayed();
    }

    async proceedToCheckout() {
        await this.cartPage.clickProceedToCheckout();
    }
}

module.exports = { CartSteps };