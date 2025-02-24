# Playwright Test Automation Project

## Project Overview

This project is an automation testing suite built with Playwright and TypeScript to demonstrates end-to-end testing of various elements on the [DemoQA](https://demoqa.com/) website.

## Installation and Setup

### Prerequisites
- **Node.js** (version 14 or higher)
- **npm** (or yarn)

### Installation and Setup
Clone the repository:
```bash
git clone https://github.com/matebowski/playwright-automation.git
```
Navigate to the project directory:
```bash
cd playwright-portfolio-tests
```
Install dependencies:
```bash
npm install
```
### How to Run the Project
Running Tests
Headless Mode (default):
```bash
npx playwright test
```
Headed Mode (with browser window visible):
```bash
npx playwright test --headed
```
Interactive Mode (Playwright UI):
```bash
npx playwright test --ui
```
Generating Reports
After test execution, you can generate and view the test report with:
```bash
npx playwright show-report
```
## CI/CD
This project uses GitHub Actions for continuous integration. On every push and pull request to the main branch (or via manual trigger), the workflow defined in .github/workflows/playwright.yml runs the test suite automatically.

## Project Structure
- /pages: Contains Page Object Model (POM) classes for various sections (e.g., WebTables).
- /tests: Contains test specification files for different features.
- /data: Contains the test data module which uses Faker to generate dynamic test data.
- .github/workflows: Contains the GitHub Actions workflow file for CI/CD.
- playwright.config.ts: Configuration file for Playwright settings.
