import { test, expect } from '@playwright/test';

import { AuthSteps } from '../../steps/auth.steps.js';
import { ProductSteps } from '../../steps/product.steps.js';
import { CartSteps } from '../../steps/cart.steps.js';
import { CheckoutSteps } from '../../steps/checkout.steps.js';
import { PaymentSteps } from '../../steps/payment.steps.js';

test('TC15 - Place Order: Register before Checkout', async ({ page }) => {

    // Create Page/Step objects
    const authSteps = new AuthSteps(page);
    const productSteps = new ProductSteps(page);
    const cartSteps = new CartSteps(page);
    const checkoutSteps = new CheckoutSteps(page);
    const paymentSteps = new PaymentSteps(page);

    // Generate unique email for registration
    const timestamp = Date.now();

    const user = {
        name: 'Adibah',
        email: `adibah${timestamp}@example.com`,
        password: 'Test@12345',
        day: '10',
        month: '5',
        year: '1998',
        firstName: 'Adibah',
        lastName: 'Samsul',
        company: 'Test Company',
        address: 'Test Address',
        country: 'Singapore',
        state: 'Test State',
        city: 'Test City',
        zipcode: '12345',
        mobile: '0123456789'
    };

    const payment = {
        nameOnCard: 'Adibah',
        cardNumber: '4111111111111111',
        cvc: '123',
        expiryMonth: '12',
        expiryYear: '2030'
    };

    // 4–6. Register user
    await authSteps.registerUser(user);

    // Verify ACCOUNT CREATED!
    await expect(
        page.getByText('Account Created!', { exact: false })
    ).toBeVisible();

    // Click Continue
    await authSteps.continueAfterRegistration();

    // 7. Verify user is logged in
    await authSteps.verifySuccessfulLogin();

    // 8. Add products to cart
    await productSteps.addProductsToCart();

    // 9. Click Cart
    await productSteps.goToCart();

    // 10. Verify Cart page
    await cartSteps.verifyCartPageDisplayed();

    // 11. Proceed to Checkout
    await cartSteps.proceedToCheckout();

    // 12. Verify Address Details and Review Your Order
    await checkoutSteps.verifyCheckoutDetails();

    // 13. Enter comment and place order
    await checkoutSteps.placeOrder(
        'Please deliver the order as soon as possible.'
    );

    // 14. Enter payment details
    await paymentSteps.enterPaymentDetails(payment);

    // 15. Pay and Confirm Order
    await paymentSteps.payAndConfirmOrder();

    // 16. Verify order placed successfully
    await paymentSteps.verifyOrderPlaced();

    await expect(
        page.getByRole('heading', { name: 'Order Placed!' })
    ).toBeVisible();

    // 17. Delete Account
    await authSteps.deleteAccount();

    // 18. Verify account deleted
    await authSteps.verifyAccountDeleted();

    await expect(
        page.getByText('Account Deleted!', { exact: false })
    ).toBeVisible();

    // Continue after account deletion
    await authSteps.continueAfterAccountDeleted();
});