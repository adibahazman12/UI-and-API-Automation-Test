export class HomePage {
    constructor(page) {
        this.page = page;

        // Navigation
        this.signupLoginButton = page.getByRole('link', { name: 'Signup / Login' });
        this.productsButton = page.getByRole('link', { name: 'Products' });
        this.cartButton = page.getByRole('link', { name: 'Cart' });
        this.logoutButton = page.getByRole('link', { name: 'Logout' });
        this.deleteAccountButton = page.getByRole('link', { name: 'Delete Account' });
        this.continueButton = page.getByRole('link', { name: 'Continue' });

        // Account status
        this.loggedInAsText = page.getByText('Logged in as', { exact: false });
        this.accountDeletedText = page.getByText('Account Deleted!', { exact: false });
    }

    async goToHome() {
        await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    }

    async isHomeVisible() {
        await this.page.locator('body').waitFor();
    }

    async clickSignupLogin() {
        await this.signupLoginButton.click();
    }

    async clickProducts() {
        await this.productsButton.click();
    }

    async clickCart() {
        await this.cartButton.click();
    }

    async isLoggedIn() {
        await this.loggedInAsText.waitFor();
    }

    async logout() {
        await this.logoutButton.click();
    }

    async deleteAccount() {
        await this.deleteAccountButton.click();
    }

    async isAccountDeleted() {
        await this.accountDeletedText.waitFor();
    }

    async clickContinue() {
        await this.continueButton.click();
    }
}