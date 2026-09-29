import { test, expect } from '@playwright/test';
import { AuthSteps } from '../../steps/auth.steps.js';

test('TC2 - Login User with correct credentials', async ({ page }) => {
    const authSteps = new AuthSteps(page);

    const email = 'adibah@gmail.com';
    const password = '1234abcd';

    await authSteps.loginUser(email, password);
    await authSteps.verifySuccessfulLogin();

    await expect(
        page.getByText('Logged in as', { exact: false })
    ).toBeVisible();
});