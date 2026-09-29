class AutomationExerciseApiClient {
    constructor(request) {
        this.request = request;
    }

    // API1
    async getAllProducts() {
        return await this.request.get('/api/productsList');
    }

    // API3
    async getAllBrands() {
        return await this.request.get('/api/brandsList');
    }

    // API5
    async searchProduct(productName) {
        return await this.request.post('/api/searchProduct', {
            form: {
                search_product: productName
            }
        });
    }

    async verifyLogin(email, password) {
        return await this.request.post('/api/verifyLogin', {
            form: {
                email: email,
                password: password
            }
        });
    }
}

module.exports = { AutomationExerciseApiClient };