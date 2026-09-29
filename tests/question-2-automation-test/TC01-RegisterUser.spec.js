import { test, expect } from '@playwright/test';
import { AuthSteps } from '../../steps/auth.steps.js';

test.describe('Question 2 - Automation Test', () => {

    test('TC1 - Register User', async ({ page }) => {
        const authSteps = new AuthSteps(page);

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

        await authSteps.registerUser(user);

        await expect(
            page.getByText('Account Created!', { exact: false })
        ).toBeVisible();
    });

});