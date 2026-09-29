class ProductPage {
    constructor(page) {
        this.page = page;
        this.productsButton = 'a[href="/products"]';
        this.addToCartButtons = '.productinfo a.add-to-cart';
        this.continueShoppingButton = 'button.btn-success';
        this.cartButton = page.getByRole('link', { name: /Cart/ });
    }

    async goToProducts() {
        await this.page.locator(this.productsButton).click();
    }

    async addProductsToCart() {
        await this.page.locator(this.addToCartButtons).nth(0).click();
        await this.page.locator(this.continueShoppingButton).click();
        await this.page.locator(this.addToCartButtons).nth(1).click();
    }

    async goToCart() {
        await this.cartButton.click();
    }
}

module.exports = { ProductPage };