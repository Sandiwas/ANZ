import { test, expect } from '@playwright/test'
import * as data  from '../testData/data'
import { LoginPage } from '../pages/loginpage'
import { HomePage } from '../pages/homepage';
import { ProductPage } from '../pages/productpage'
import { CartPage } from '../pages/cartpage';
import { AddressPage } from '../pages/addresspage'
import { ProductOverviewPage } from '../pages/productoverviewpage';
import { CheckoutPage } from '../pages/checkoutpage';


test('Login To Application', async ({ page }) => {

  await page.goto("https://www.saucedemo.com/");

  const loginPage = new LoginPage(page)
  await loginPage.loginToApplication(data.url);


  const productpage = new ProductPage(page);
  await productpage.clickSauceLabsBackpack();
  await productpage.click_shopping_cart_link();

  const cartPage = new CartPage(page);
  await cartPage.click_on_checkout();

  const addressPage = new AddressPage(page);
  await addressPage.shippingAddress();

  const productoverviewpage = new ProductOverviewPage(page);
  await productoverviewpage.click_on_FinishButton();

  const checkoutpage = new CheckoutPage(page);
  await checkoutpage.verifyOrderCompleted();

  const homePage = new HomePage(page);
  await homePage.logoutFromApplication();

});