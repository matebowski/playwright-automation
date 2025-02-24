import { test, expect } from "@playwright/test";

test.describe("DemoQA homepage", () => {
  test("Navigation to the homepage", async ({ page }) => {
    await page.goto("/");
    const header = page.locator("header");
    await expect(header).toBeVisible();

    const elementsCard = page.locator("text=Elements");
    await expect(elementsCard).toBeVisible();
  });
});
