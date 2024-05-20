import { test, expect } from '@playwright/test'

test.use({viewport :{width :1500,height:1000}})

test("Verify Error MEssage", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    console.log(page.viewportSize().height);
    console.log(page.viewportSize().width)
    
    await page.getByPlaceholder("Username").fill("Admin", { dealy: 2000 });
    await page.getByPlaceholder("password").fill("admindas", { dealy: 2000 });
    await page.locator("//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button[1]").click();
    const errormsg = await page.locator("//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]/div[1]").textContent();
    console.log("Error message is " + errormsg)
    expect(errormsg.includes("Invalid")).toBeTruthy();
    expect(errormsg.includes("Error")).toBeTruthy();
    expect(errormsg === "Invalid credentials").toBeTruthy();
}
)