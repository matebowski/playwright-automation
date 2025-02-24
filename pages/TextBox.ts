import { Page, Locator, expect } from "@playwright/test";

export class TextBox {
  readonly page: Page;
  readonly fullNameInput: Locator;
  readonly emailInput: Locator;
  readonly currentAddressInput: Locator;
  readonly permanentAddressInput: Locator;
  readonly submitButton: Locator;
  readonly outputField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fullNameInput = page.locator("#userName");
    this.emailInput = page.locator("#userEmail");
    this.currentAddressInput = page.locator("#currentAddress");
    this.permanentAddressInput = page.locator("#permanentAddress");
    this.submitButton = page.locator("#submit");
    this.outputField = page.locator("#output");
  }

  async fillForm(
    fullName: string,
    email: string,
    currentAddres: string,
    permanentAddress: string
  ) {
    await this.fullNameInput.fill(fullName);
    await this.emailInput.fill(email);
    await this.currentAddressInput.fill(currentAddres);
    await this.permanentAddressInput.fill(permanentAddress);
  }

  async submitForm() {
    await this.submitButton.scrollIntoViewIfNeeded();
    await this.submitButton.click();
  }

  async verifySubmittedForm(
    fullName: string,
    email: string,
    currentAddres: string,
    permanentAddress: string
  ) {
    await expect(this.outputField).toContainText(fullName);
    await expect(this.outputField).toContainText(email);
    await expect(this.outputField).toContainText(currentAddres);
    await expect(this.outputField).toContainText(permanentAddress);
  }
}
