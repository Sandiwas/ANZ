import { expect } from "@playwright/test";

class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.backtToHomepage = "//*[@id='back-to-products']";
        this.getordercompletedmsg="//*[text()='Thank you for your order!']"
      

    }

    async verifyOrderCompleted() {
        const getMsg =await this.page.locator(this.getordercompletedmsg).textContent();
        expect(getMsg.includes("Thank you for your order"));
        await this.page.click(this.backtToHomepage)

    }

}

export { CheckoutPage }