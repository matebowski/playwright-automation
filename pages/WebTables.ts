import { Locator, Page, expect } from "@playwright/test";

export class WebTables {
  readonly page: Page;
  readonly addButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly ageInput: Locator;
  readonly salaryInput: Locator;
  readonly departmentInput: Locator;
  readonly submitButton: Locator;
  readonly table: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addButton = page.locator("#addNewRecordButton");
    this.firstNameInput = page.locator("#firstName");
    this.lastNameInput = page.locator("#lastName");
    this.emailInput = page.locator("#userEmail");
    this.ageInput = page.locator("#age");
    this.salaryInput = page.locator("#salary");
    this.departmentInput = page.locator("#department");
    this.submitButton = page.locator("#submit");
    this.table = page.locator(".rt-table");
  }

  async addRecord(
    firstName: string,
    lastName: string,
    email: string,
    age: number,
    salary: number,
    department: string
  ) {
    await this.addButton.click();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.ageInput.fill(age.toString());
    await this.salaryInput.fill(salary.toString());
    await this.departmentInput.fill(department);
    await this.submitButton.click();
  }

  async verifyRecord(firstName: string, lastName: string) {
    await expect(this.table).toContainText(firstName);
    await expect(this.table).toContainText(lastName);
  }
}
