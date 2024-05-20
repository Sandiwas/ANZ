
import * as data  from '../testData/data'
class AddressPage
 {
    constructor(page) 
    {
        this.page = page;
        this.fname="#first-name";
        this.lname="#last-name";
        this.zipcode="//*[@id='postal-code']";
        this.continueButton="#continue"
    }

    async shippingAddress(){
        await this.page.fill(this.fname,data.fname)
        await this.page.fill(this.lname,data.lname)
        await this.page.fill(this.zipcode,data.zip_code)
        await this.page.click(this.continueButton)

    }
}

export {AddressPage}