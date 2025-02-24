import { test } from "@playwright/test";
import { TextBox } from "../pages/TextBox";
import { CheckBox } from "../pages/CheckBox";
import { testData } from "../data/testData";

test.describe("Elements section tests", () => {
  test("TextBox form interactions", async ({ page }) => {
    await page.goto("/text-box");
    const textBox = new TextBox(page);

    await textBox.fillForm(
      testData.fullName,
      testData.email,
      testData.currentAddres,
      testData.permanentAddress
    );
    await textBox.submitForm();
    await textBox.verifySubmittedForm(
      testData.fullName,
      testData.email,
      testData.currentAddres,
      testData.permanentAddress
    );
  });
  test("Select a checkbox and verify output", async ({ page }) => {
    await page.goto("/checkbox");
    const checkBoxPage = new CheckBox(page);

    await checkBoxPage.expandAll();
    await checkBoxPage.selectCheckbox("commands");
    await checkBoxPage.verifySelected("commands");
  });
});
