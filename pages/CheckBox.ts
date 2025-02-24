import { Page, Locator, expect } from "@playwright/test";

export class CheckBox {
  readonly page: Page;
  readonly expandAllButton: Locator;
  readonly resultText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.expandAllButton = page.locator('button[aria-label="Expand all"]');
    this.resultText = page.locator("#result");
  }

  async expandAll() {
    this.expandAllButton.click();
  }

  async selectCheckbox(label: string) {
    const checkbox = this.page
      .locator(`label:has-text("${label}")`)
      .locator(".rct-checkbox");
    await checkbox.click();
  }

  async verifySelected(label: string) {
    await expect(this.resultText).toContainText(label);
  }
}
