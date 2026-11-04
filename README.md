# E-Commerce QA Testing Project

A beginner QA Engineering portfolio project focused on Manual Testing, API Testing, Browser Automation and Continuous Integration.

## Project Overview

This project demonstrates software testing practices using an e-commerce web application. It covers functional testing, negative testing, API validation, browser automation and automated test execution through GitHub Actions.

**Application Under Test:** [SauceDemo](https://www.saucedemo.com/)

## Tech Stack

| Tool | Purpose |
|---|---|
| Manual Testing | Functional and negative testing |
| Postman | API Testing |
| Playwright | Browser Automation |
| JavaScript | Automation test scripts |
| GitHub | Version Control |
| GitHub Actions | CI/CD and automated execution |
| Chromium | Browser testing |

## Project Structure

```text
ecommerce-qa-testing-project/
│
├── Test-Plan/
│   └── test-plan.md
│
├── Test-Cases/
│   ├── login-test-cases.md
│   └── product-cart-checkout.md
│
├── Bug-Reports/
│   └── bug-reports.md
│
├── API-Testing/
│   ├── README.md
│   ├── api-test-cases.md
│   └── postman-tests.md
│
├── tests/
│   └── login.spec.js
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── package.json
├── playwright.config.js
└── README.md
```

## 1. Manual Testing

Performed manual functional and negative testing on SauceDemo.

**Testing Coverage:**
- Login functionality
- Invalid login credentials
- Empty input fields
- Product display
- Product selection
- Cart functionality
- Checkout workflow

**Documentation:**
- Test Plan
- Login Test Cases
- Product, Cart and Checkout Test Cases
- Bug Reports

A total of 16 manual test cases have been designed, with initial execution documented.

## 2. API Testing – Postman

Performed API testing using JSONPlaceholder, a simulated REST API.

**HTTP Methods Covered:**
- GET
- POST
- PUT
- DELETE

**Testing Scenarios:**
- Fetch a single post
- Create a post
- Update a post
- Delete a post
- Test invalid endpoints
- Test missing required data
- Test invalid data types

**Total API Requests:** 7

**Result:** All 7 API test scripts passed their configured assertions.

## 3. Browser Automation – Playwright

Implemented browser automation using Playwright with JavaScript.

**Automated Test Cases:**

| Test ID | Test Scenario |
|---|---|
| PW001 | Valid Login |
| PW002 | Invalid Password |
| PW003 | Empty Username |
| PW004 | Add Product to Cart |
| PW005 | Remove Product from Cart |
| PW006 |
