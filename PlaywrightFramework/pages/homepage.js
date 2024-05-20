
class HomePage {
    constructor(page) {
        this.page = page;
        this.menu = "//*[@id='react-burger-menu-btn']";
        this.logout = "//*[@id='logout_sidebar_link']";

    }

    async logoutFromApplication() {
 
        await this.page.click(this.menu)
        await this.page.click(this.logout)

    }
}

export { HomePage }