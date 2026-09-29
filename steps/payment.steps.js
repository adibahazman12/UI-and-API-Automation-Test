import { PaymentPage } from '../pages/PaymentPage.js';

export class PaymentSteps {
    constructor(page) {
        this.paymentPage = new PaymentPage(page);
    }

    async enterPaymentDetails(payment) {
        await this.paymentPage.enterPaymentDetails(payment);
    }

    async payAndConfirmOrder() {
        await this.paymentPage.clickPayAndConfirmOrder();
    }

    async verifyOrderPlaced() {
        await this.paymentPage.verifyOrderPlaced();
    }
}