class CartPage {
    constructor(page) {
        this.page = page;
        this.checkoutButton= "#checkout";
        

    }

    
    async click_on_checkout() {
        await this.page.click(this.checkoutButton)

    }
}
export { CartPage }