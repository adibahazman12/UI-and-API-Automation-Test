import { HomePage } from '../pages/HomePage.js';
import { LoginPage } from '../pages/LoginPage.js';
import { SignupPage } from '../pages/SignupPage.js';

export class AuthSteps {
    constructor(page) {
        this.homePage = new HomePage(page);
        this.loginPage = new LoginPage(page);
        this.signupPage = new SignupPage(page);
    }

    async registerUser(user) {
        await this.homePage.goToHome();
        await this.homePage.clickSignupLogin();

        await this.signupPage.fillSignupDetails(user.name, user.email);
        await this.signupPage.fillAccountInformation(user);
        await this.signupPage.createAccount();
        await this.signupPage.verifyAccountCreated();
    }

    async loginUser(email, password) {
        await this.homePage.goToHome();
        await this.homePage.clickSignupLogin();

        await this.loginPage.login(email, password);
    }

    async verifySuccessfulLogin() {
    await this.homePage.isLoggedIn();
}

    async verifyInvalidLogin() {
        await this.loginPage.verifyLoginError();
    }

    async deleteAccount() {
        await this.homePage.deleteAccount();
    }

    async verifyAccountDeleted() {
        await this.homePage.isAccountDeleted();
    }

    async continueAfterAccountDeleted() {
        await this.homePage.clickContinue();
    }

    async continueAfterRegistration() {
        await this.signupPage.clickContinue();
}
}