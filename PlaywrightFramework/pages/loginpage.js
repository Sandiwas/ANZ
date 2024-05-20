
import * as data  from '../testData/data'
class LoginPage
 {
    constructor(page) 
    {
        this.page = page;
        this.username="#user-name";
        this.password="#password";
        this.loginButton="#login-button";
    }

    async loginToApplication(){
        await this.page.fill(this.username,data.username)
        await this.page.fill(this.password,data.password)
        await this.page.click(this.loginButton)

    }
}

export {LoginPage}
