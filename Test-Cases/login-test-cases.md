# Login Module – Test Cases and Execution Report

## 1. Project Information

**Project Name:** E-commerce Website QA Testing Project

**Application Under Test:** SauceDemo (Swag Labs)

**Website:** https://www.saucedemo.com/

**Testing Type:** Manual Testing

**Testing Module:** Login

**Browser:** Google Chrome

**Project Status:** Login Testing Completed

---

## 2. Objective

The objective of this testing activity is to verify that the login functionality works correctly with valid and invalid inputs.

The testing covers positive and negative scenarios, including empty fields, incorrect credentials, and password case sensitivity.

---

## 3. Test Environment

- Application: SauceDemo
- Browser: Google Chrome
- Testing Method: Manual Testing
- Test Account Username: standard_user
- Test Account Password: secret_sauce

---

## 4. Test Cases

### TC001 – Login with Valid Credentials

**Test Scenario:** Verify login using valid credentials.

**Precondition:** User is on the login page.

**Test Steps:**
1. Enter username: standard_user
2. Enter password: secret_sauce
3. Click the Login button.

**Expected Result:** User should successfully log in and the products page should open.

**Actual Result:** Products page opened successfully.

**Status:** PASS

---

### TC002 – Login with Incorrect Password

**Test Scenario:** Verify login using an incorrect password.

**Precondition:** User is on the login page.

**Test Steps:**
1. Enter username: standard_user
2. Enter password: wrong123
3. Click the Login button.

**Expected Result:** Login should be rejected and an error message should appear.

**Actual Result:** Login was rejected and an error message appeared.

**Status:** PASS

---

### TC003 – Login with Empty Username

**Test Scenario:** Verify login when the username field is empty.

**Precondition:** User is on the login page.

**Test Steps:**
1. Leave the username field empty.
2. Enter password: secret_sauce
3. Click the Login button.

**Expected Result:** An error message should appear asking the user to enter a username.

**Actual Result:** An error message appeared near the login button.

**Status:** PASS

---

### TC004 – Login with Empty Password

**Test Scenario:** Verify login when the password field is empty.

**Precondition:** User is on the login page.

**Test Steps:**
1. Enter username: standard_user
2. Leave the password field empty.
3. Click the Login button.

**Expected Result:** Login should be rejected and an error message should appear.

**Actual Result:** Login was rejected and an error message appeared.

**Status:** PASS

---

### TC005 – Login with Both Fields Empty

**Test Scenario:** Verify login when both username and password fields are empty.

**Precondition:** User is on the login page.

**Test Steps:**
1. Leave the username field empty.
2. Leave the password field empty.
3. Click the Login button.

**Expected Result:** Login should be rejected and a required-field validation message should appear.

**Actual Result:** Login was rejected and an error message appeared.

**Status:** PASS (Pending confirmation that the message matches the expected validation.)

---

### TC006 – Login with Invalid Username

**Test Scenario:** Verify login using an invalid username.

**Precondition:** User is on the login page.

**Test Steps:**
1. Enter username: invalid_email
2. Enter password: secret_sauce
3. Click the Login button.

**Expected Result:** Login should be rejected and an error message should appear.

**Actual Result:** Login was rejected and an error message appeared.

**Status:** PASS

---

### TC007 – Login with Incorrect Password Case

**Test Scenario:** Verify password case sensitivity.

**Precondition:** User is on the login page.

**Test Steps:**
1. Enter username: standard_user
2. Enter password: SECRET_SAUCE
3. Click the Login button.

**Expected Result:** Login should be rejected because passwords are case-sensitive.

**Actual Result:** Login was rejected and an error message appeared.

**Status:** PASS

---

## 5. Test Execution Summary

| Metric | Result |
|---|---|
| Total Test Cases | 7 |
| Passed | 7 (TC005 pending confirmation) |
| Failed | 0 |
| Blocked | 0 |

---

## 6. Bug Report Summary

No confirmed bugs were identified during this testing cycle.

Any future bugs will be documented separately after reproduction and verification.

---

## 7. Conclusion

The login module of SauceDemo was tested manually using seven different test scenarios.

Both positive and negative testing approaches were used to verify login functionality.

The application behaved as expected based on the observations recorded during testing.

---

## 8. Project Status

**Login Module:** Completed

**Testing Approach:** Manual Testing

**Next Module:** Product Page and Inventory Testing

**Overall Project Status:** In Progress
