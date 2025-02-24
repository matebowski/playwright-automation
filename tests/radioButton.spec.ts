import { test } from "@playwright/test";
import { RadioButton } from "../pages/RadioButton";

test.describe("Radio Button tests", () => {
  test("Select 'Yes' radio button and verify result", async ({ page }) => {
    await page.goto("/radio-button");
    const radioButton = new RadioButton(page);
    await radioButton.selectRadioButtonOption("Yes");
    await radioButton.verifySelection("Yes");
  });
});
