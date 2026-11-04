# E-Commerce Website QA Testing Project

A beginner QA portfolio project demonstrating manual testing, API testing, browser automation, and continuous integration using GitHub Actions.

## Project Overview

This project focuses on testing the SauceDemo e-commerce application to evaluate its login, product browsing, shopping cart, and checkout functionalities.

**Application under test:** https://www.saucedemo.com/

## Testing Summary

| Testing Type | Coverage |
|---|---|
| Manual Testing | 16 test cases designed; first 8 executed |
| API Testing | 7 Postman requests with assertions |
| Automation Testing | 10 Playwright test cases |
| CI/CD | GitHub Actions workflow |
| Test Reporting | Playwright HTML report |

## Project Structure

- `Test-Plan/` – Test strategy and scope
- `Test-Cases/` – Manual test scenarios
- `Bug-Reports/` – Documented defects
- `API-Testing/` – API test documentation
- `tests/` – Playwright automation scripts
- `.github/workflows/` – GitHub Actions configuration

## Tools & Technologies

- Manual Software Testing
- Postman
- Playwright
- JavaScript
- Node.js
- GitHub
- GitHub Actions

## Automated Testing

The project contains 10 Playwright automated tests covering:

- Valid and invalid login
- Empty login fields
- Adding and removing cart items
- Checkout navigation
- Checkout validation
- Successful order completion
- Logout functionality

**Latest successful run: 10/10 tests passed.**

### Test Execution Evidence

**Playwright Test Results – Screenshot 1**

![Playwright Results 1](screenshots/Screenshot%202026-11-04%20173702.png)

**Playwright Test Results – Screenshot 2**

![Playwright Results 2](screenshots/Screenshot%202026-11-04%20173716.png)
## API Testing

Used Postman with JSONPlaceholder to test:

- GET
- POST
- PUT
- DELETE
- Invalid endpoint
- Missing required data
- Invalid data types

  
### API Testing Evidence

**Postman Collection – 7 API Requests**

![Postman Collection](screenshots/Screenshot%202026-11-04%20175618.png)

**Postman Test Results – Passing Assertions**

![Postman Test Results](screenshots/Screenshot%202026-11-04%20175639.png)

All 7 configured assertions passed.

*Note: JSONPlaceholder is a simulated API. Write operations return simulated responses and do not persist changes.*

## HTML Test Report

Playwright generates an HTML report after automated test execution.

The report is uploaded as a GitHub Actions workflow artifact named `playwright-html-report`.

To access it:
1. Open the repository's Actions tab.
2. Select the latest successful workflow run.
3. Download the `playwright-html-report` artifact.
4. Extract it and open `index.html`.

## Running the Tests Locally

Install dependencies:

```bash
npm install
