const { expect } = require('@playwright/test');
const { AutomationExerciseApiClient } = require('../api/AutomationExerciseApiClient');

class ApiSteps {
    constructor(request) {
        this.apiClient = new AutomationExerciseApiClient(request);
    }

    async getAllProducts() {

        console.log('\n========== API1 - Get All Products List ==========');

        const response = await this.apiClient.getAllProducts();

        expect(response.status()).toBe(200);

        console.log('Response URL:', response.url());
        console.log('Status:', response.status());  //HTTP response status from server
        console.log('Response Content-Type:', response.headers()['content-type']);

        const responseText = await response.text();

        console.log('Response Body:', responseText);

        const responseBody = JSON.parse(responseText); //if the response is in JSON format, use JSON.parse() to convert it into a JavaScript object

        expect(responseBody.responseCode).toBe(200);
        expect(responseBody.products).toBeDefined();

        console.log('Response Code:', responseBody.responseCode);  //result defined by the API
        console.log('Products Count:', responseBody.products?.length);

        return responseBody;
    }

    // API3 - Get All Brands
    async getAllBrands() {

        console.log('\n========== API3 - Get All Brands List ==========');

        const response = await this.apiClient.getAllBrands();

        expect(response.status()).toBe(200);

        console.log('Response URL:', response.url());
        console.log('Status:', response.status());  //HTTP response status 
        console.log('Response Content-Type:', response.headers()['content-type']);

        const responseBody = await response.json(); //if the response is in JSON format, use response.json() to parse it directly

        console.log('Response Body:', responseBody);

        expect(responseBody.responseCode).toBe(200);
        expect(responseBody.brands).toBeDefined();

        console.log('Response Code:', responseBody.responseCode);
        console.log('Brands Count:', responseBody.brands?.length);

        return responseBody;
    }

     // API5 - Search Product
    async searchProduct(productName) {

        console.log('\n========== API5 - Search Product ==========');
        console.log('Search Product:', productName);

        const response = await this.apiClient.searchProduct(productName);

        expect(response.status()).toBe(200);

        console.log('URL:', response.url());
        console.log('Status:', response.status());  //HTTP response status      
        console.log('Content-Type:', response.headers()['content-type']);


        const responseBody = await response.json();

        expect(responseBody.responseCode).toBe(200);
        expect(responseBody.products).toBeDefined();

        console.log('Response Code:', responseBody.responseCode);
        console.log('Products Found:', responseBody.products?.length);


        return responseBody;
    }

     // API7 & API10 - Verify Login
    async verifyLogin(email, password) {

        console.log('\n========== API7/API10 - Verify Login ==========');
        console.log('Email:', email);
        console.log('Password:', password);

        const response = await this.apiClient.verifyLogin(email, password);

        expect(response.status()).toBe(200);
        console.log('URL:', response.url());
        console.log('Status:', response.status());
        console.log('Content-Type:', response.headers()['content-type']);

        const responseBody = await response.json();

        expect(responseBody.responseCode).toBeDefined();

        console.log('Response Code:', responseBody.responseCode);
        console.log('Message:', responseBody.message);

        return responseBody;
    }

}

module.exports = { ApiSteps };