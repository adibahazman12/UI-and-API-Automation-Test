export class LoginPage {
    constructor(page) {
        this.page = page;

        this.loginEmailInput = page.locator('[data-qa="login-email"]');
        this.loginPasswordInput = page.locator('[data-qa="login-password"]');
        this.loginButton = page.locator('[data-qa="login-button"]');
        this.loginErrorMessage = page.getByText('Your email or password is incorrect!', { exact: false });
    }

    async login(email, password) {
        await this.loginEmailInput.fill(email);
        await this.loginPasswordInput.fill(password);
        await this.loginButton.click();
    }

    async verifyLoginError() {
        await this.loginErrorMessage.waitFor();
    }
}