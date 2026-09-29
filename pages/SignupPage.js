export class SignupPage {
    constructor(page) {
        this.page = page;

        // Account information
        this.titleMrRadio = page.locator('#id_gender1');
        this.titleMrsRadio = page.locator('#id_gender2');
        this.passwordInput = page.locator('[data-qa="password"]');
        this.dayDropdown = page.locator('[data-qa="days"]');
        this.monthDropdown = page.locator('[data-qa="months"]');
        this.yearDropdown = page.locator('[data-qa="years"]');

        // Address information
        this.firstNameInput = page.locator('[data-qa="first_name"]');
        this.lastNameInput = page.locator('[data-qa="last_name"]');
        this.companyInput = page.locator('[data-qa="company"]');
        this.addressInput = page.locator('[data-qa="address"]');
        this.countryDropdown = page.locator('[data-qa="country"]');
        this.stateInput = page.locator('[data-qa="state"]');
        this.cityInput = page.locator('[data-qa="city"]');
        this.zipcodeInput = page.locator('[data-qa="zipcode"]');
        this.mobileNumberInput = page.locator('[data-qa="mobile_number"]');

        this.signupNameInput = page.locator('[data-qa="signup-name"]');
        this.signupEmailInput = page.locator('[data-qa="signup-email"]');
        this.signupButton = page.locator('[data-qa="signup-button"]');

        // Create account
        this.createAccountButton = page.locator('[data-qa="create-account"]');

        // Account created
        this.accountCreatedText = page.getByText('Account Created!', { exact: false });

        this.continueButton = page.getByRole('link', { name: 'Continue' });
    }

    async fillAccountInformation(user) {
        await this.titleMrRadio.check();
        await this.passwordInput.fill(user.password);
        await this.dayDropdown.selectOption(user.day);
        await this.monthDropdown.selectOption(user.month);
        await this.yearDropdown.selectOption(user.year);
        await this.firstNameInput.fill(user.firstName);
        await this.lastNameInput.fill(user.lastName);
        await this.companyInput.fill(user.company);
        await this.addressInput.fill(user.address);
        await this.countryDropdown.selectOption(user.country);
        await this.stateInput.fill(user.state);
        await this.cityInput.fill(user.city);
        await this.zipcodeInput.fill(user.zipcode);
        await this.mobileNumberInput.fill(user.mobile);
    }

    async fillSignupDetails(name, email) {
        await this.signupNameInput.fill(name);
        await this.signupEmailInput.fill(email);
        await this.signupButton.click();
    }

    async createAccount() {
        await this.createAccountButton.click();
    }

    async verifyAccountCreated() {
        await this.accountCreatedText.waitFor();
    }

    async clickContinue() {
    await this.continueButton.click();
}
}