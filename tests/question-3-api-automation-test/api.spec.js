const { test, expect } = require('@playwright/test');
const { ApiSteps } = require('../../steps/api.steps');

test.describe.configure({ mode: 'serial' }); //enable this to run tests in serial mode, as some tests depend on the previous test's state
test.describe('Question 3 - API Automation', () => {

    test('API1 - Get All Products List', async ({ request }) => {

        const apiSteps = new ApiSteps(request);

        await apiSteps.getAllProducts();

    });

     // API3
    test('API3 - Get All Brands List', async ({ request }) => {

        const apiSteps = new ApiSteps(request);

        await apiSteps.getAllBrands();

    });

     // API5
    test('API5 - Search Product', async ({ request }) => {

        const apiSteps = new ApiSteps(request);

        const responseBody = await apiSteps.searchProduct('top');

        expect(responseBody.products.length).toBeGreaterThan(0);

    });

    // API7
    test('API7 - Verify Login With Valid Details', async ({ request }) => {

        const apiSteps = new ApiSteps(request);

        const responseBody = await apiSteps.verifyLogin(
            'adibah@gmail.com',
            '1234abcd'
        );

        expect(responseBody.responseCode).toBe(200);

    });


    // API10
    test('API10 - Verify Login With Invalid Details', async ({ request }) => {

        const apiSteps = new ApiSteps(request);

        const responseBody = await apiSteps.verifyLogin(
            'adibahazman129@gmail.com',
            'wrongpassword'
        );

        expect(responseBody.responseCode).toBe(404);

    });


});
