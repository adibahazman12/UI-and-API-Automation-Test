import { test, expect } from '@playwright/test';
import { AuthSteps } from '../../steps/auth.steps.js';

test('TC3 - Login User with incorrect credentials', async ({ page }) => {
    const authSteps = new AuthSteps(page);

    const email = 'invalid@example.com';
    const password = 'wrongpassword';

    await authSteps.loginUser(email, password);
    await authSteps.verifyInvalidLogin();

    await expect(
        page.getByText('Your email or password is incorrect!', { exact: false })
    ).toBeVisible();
});