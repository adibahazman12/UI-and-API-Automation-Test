class CheckoutPage {
    constructor(page) {
        this.page = page;

        this.addressDetailsTitle = page.getByText('Address Details', { exact: true });
        this.reviewYourOrderTitle = page.getByText('Review Your Order', { exact: true });
        this.commentTextArea = page.locator('textarea[name="message"]');
        this.placeOrderButton = page.getByRole('link', { name: 'Place Order' });
    }

    async verifyCheckoutDetails() {
        await this.addressDetailsTitle.waitFor();
        await this.reviewYourOrderTitle.waitFor();
    }

    async enterOrderComment(comment) {
        await this.commentTextArea.fill(comment);
    }

    async clickPlaceOrder() {
        await this.placeOrderButton.click();
    }
}

module.exports = { CheckoutPage };