class ProductOverviewPage {
    constructor(page) {
        this.page = page;
        this.finishButton = "//*[@id='finish']";


    }

    async click_on_FinishButton() {
        await this.page.click(this.finishButton)

    }
}

export { ProductOverviewPage }