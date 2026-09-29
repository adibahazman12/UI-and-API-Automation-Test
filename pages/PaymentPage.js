export class PaymentPage {
    constructor(page) {
        this.page = page;

        this.nameOnCardInput = page.locator('[data-qa="name-on-card"]');
        this.cardNumberInput = page.locator('[data-qa="card-number"]');
        this.cvcInput = page.locator('[data-qa="cvc"]');
        this.expiryMonthInput = page.locator('[data-qa="expiry-month"]');
        this.expiryYearInput = page.locator('[data-qa="expiry-year"]');

        this.payAndConfirmOrderButton = page.locator('[data-qa="pay-button"]');

        this.orderPlacedMessage = page.getByRole('heading', {
            name: 'Order Placed!'
        });
    }

    async enterPaymentDetails(payment) {
        await this.nameOnCardInput.fill(payment.nameOnCard);
        await this.cardNumberInput.fill(payment.cardNumber);
        await this.cvcInput.fill(payment.cvc);
        await this.expiryMonthInput.fill(payment.expiryMonth);
        await this.expiryYearInput.fill(payment.expiryYear);
    }

    async clickPayAndConfirmOrder() {
        await this.payAndConfirmOrderButton.click();
    }

    async verifyOrderPlaced() {
        await this.orderPlacedMessage.waitFor();
    }
}