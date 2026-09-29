const { ProductPage } = require('../pages/ProductPage');

class ProductSteps {
    constructor(page) {
        this.productPage = new ProductPage(page);
    }

    async addProductsToCart() {
        await this.productPage.goToProducts();
        await this.productPage.addProductsToCart();
    }

    async goToCart() {
        await this.productPage.goToCart();
    }
}

module.exports = { ProductSteps };