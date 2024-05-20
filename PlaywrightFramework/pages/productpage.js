import { expect } from "@playwright/test";

class ProductPage {
    constructor(page) {
        this.page = page;
        this.backpack= "//*[@id='inventory_container']/div/div[1]/div[2]/div[2]/button[1]";
        this.bikeLight = "//*[@id='add-to-cart-sauce-labs-bike-light']";
        this.boltTShirt = "//*[@id='add-to-cart-sauce-labs-bolt-t-shirt']";
        this.jacket = "//*[@id='add-to-cart-sauce-labs-fleece-jacket']";
        this.labsOnesie = "//*[@id='add-to-cart-sauce-labs-onesie']";
        this.tShirtRed = "//*[@id='add-to-cart-test.allthethings()-t-shirt-(red)']";
        this.shoppingcartlink = "//*[@id='shopping_cart_container']";

    }

    async clickSauceLabsBackpack() {
        await this.page.click(this.backpack);
    }

    async clickSauceLabsBikeLight(){
      
        await this.page.click(this.bikeLight)
    }

    async clickSauceLabsBoltTShirt() {

        await this.page.click(this.boltTShirt)

    }

    async clickSauceLabsFleeceJacket() {

        await this.page.click(this.jacket)

    }
    async clickSauceLabsOnesie() {

        await this.page.click(this.labsOnesie)

    }
    async clickTShirt_Red() {
        await this.page.click(this.tShirtRed)

    }

    async click_shopping_cart_link() {
        await this.page.click(this.shoppingcartlink)
    }

}

export { ProductPage }