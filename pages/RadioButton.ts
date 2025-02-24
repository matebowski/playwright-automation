import { Page, Locator, expect } from "@playwright/test";

export class RadioButton {
  readonly page: Page;
  readonly yesRadioButton: Locator;
  readonly immpressiveRadioButton: Locator;
  readonly noRadioButton: Locator;
  readonly resultText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.yesRadioButton = page.locator('label[for="yesRadio"]');
    this.immpressiveRadioButton = page.locator('label[for="impressiveRadio"]');
    this.noRadioButton = page.locator('label[for="noRadio"]');
    this.resultText = page.locator(".text-success");
  }

  async selectRadioButtonOption(option: "Yes" | "Impressive" | "No") {
    const options = {
      Yes: this.yesRadioButton,
      Impressive: this.immpressiveRadioButton,
      No: this.noRadioButton,
    };
    await options[option].click();
  }

  async verifySelection(expectedText: string) {
    await expect(this.resultText).toHaveText(expectedText);
  }
}
