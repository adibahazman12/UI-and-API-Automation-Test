const { CheckoutPage } = require('../pages/CheckoutPage');

class CheckoutSteps {
    constructor(page) {
        this.checkoutPage = new CheckoutPage(page);
    }

    async verifyCheckoutDetails() {
        await this.checkoutPage.verifyCheckoutDetails();
    }

    async placeOrder(comment) {
        await this.checkoutPage.enterOrderComment(comment);
        await this.checkoutPage.clickPlaceOrder();
    }
}

module.exports = { CheckoutSteps };