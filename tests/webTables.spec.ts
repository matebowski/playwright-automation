import { test } from "@playwright/test";
import { WebTables } from "../pages/WebTables";
import { testData } from "../data/testData";

test.describe("Web tables tests", () => {
  test("Add new record and verify its presence", async ({ page }) => {
    await page.goto("/webtables");
    const webTables = new WebTables(page);

    await webTables.addRecord(
      testData.firstName,
      testData.lastName,
      testData.email,
      testData.age,
      testData.salary,
      testData.department
    );
    await webTables.verifyRecord(testData.firstName, testData.lastName);
    console.log(testData);
  });
});
