# API Testing Project — Postman

## Overview
This project demonstrates beginner-level API testing using Postman and automated JavaScript assertions.

## Tools Used
- Postman
- JavaScript
- JSONPlaceholder REST API
- GitHub

## API Testing Coverage

| API ID | Method | Test Scenario | Result |
|---|---|---|---|
| API001 | GET | Retrieve a post | PASS |
| API002 | POST | Create a post | PASS |
| API003 | PUT | Update a post | PASS |
| API004 | DELETE | Delete a post | PASS |
| API005 | GET | Invalid endpoint | PASS |
| API006 | POST | Empty request body | PASS |
| API007 | POST | Unexpected data types | PASS |

## Skills Demonstrated
- HTTP methods: GET, POST, PUT, DELETE
- HTTP status codes
- JSON request and response handling
- Positive and negative API testing
- Postman automated tests
- JavaScript assertions
- Test documentation

## Important Observations
JSONPlaceholder is a simulated REST API. Some requests with invalid or incomplete data were accepted. These behaviours were documented as observations rather than assumed production defects.

## Project Status
Completed beginner API testing practice.

## Future Scope
- Authentication testing
- More advanced API validations
- Playwright automation
- SQL testing

## Playwright Automation Testing

**Tool:** Playwright  
**Language:** JavaScript  
**Execution:** GitHub Actions  
**Browser:** Chromium  

### Automated Test Cases

| Test Case | Description | Status |
|---|---|---|
| PW001 | Valid Login | PASS |
| PW002 | Invalid Password | PASS |
| PW003 | Empty Username | PASS |
| PW004 | Add Product to Cart | PASS |

**Total Tests:** 4  
**Passed:** 4  
**Failed:** 0  

Tests are executed automatically through GitHub Actions.
  ## Postman Collection

[View API Testing Collection] https://go.postman.co/workspace/462eb0fa-3d1b-469e-9a14-bf3ad9245fd0
