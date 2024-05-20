import { test, expect } from "@playwright/test";

test("Verify Application Title", async ({ page }) => {
  await page.goto("https://google.com");
  const url = await page.url();
  console.log(url);

  const title = await page.title();
  expect(title).toContain("Google");
    await expect(page).toHaveTitle("Google");
  console.log(title);
});
