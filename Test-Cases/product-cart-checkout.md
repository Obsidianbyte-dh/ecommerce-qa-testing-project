# Product, Cart and Checkout Testing

## 1. Project Information

- **Project Name:** E-commerce Website QA Testing Project
- **Application:** SauceDemo (Swag Labs)
- **Website:** https://www.saucedemo.com/
- **Testing Type:** Manual Testing
- **Browser:** Google Chrome
- **Testing Modules:** Product Display, Sorting, Cart and Checkout

---

## 2. Testing Objective

The objective of this testing activity is to verify the functionality of the product display, sorting, shopping cart and checkout modules of the SauceDemo application.

The test scenarios cover normal user interactions, input validation and expected application behaviour.

---

## 3. Product Display Testing

### TC008 – Verify Product Display

**Test Scenario:** Verify that products are displayed correctly.

**Precondition:** User is successfully logged in.

**Test Steps:**
1. Open the Products page.
2. Check whether product images are visible.
3. Verify product names.
4. Verify product prices.
5. Check Add to Cart buttons.

**Expected Result:** Product images, names, prices and Add to Cart buttons should be visible.

**Actual Result:** All product images, names, prices and Add to Cart buttons were visible.

**Status:** PASS

---

## 4. Product Sorting Testing

### TC009 – Sort Products by Price (Low to High)

**Test Scenario:** Verify product sorting functionality.

**Precondition:** User is on the Products page.

**Test Steps:**
1. Open the sorting dropdown.
2. Select Price (low to high).
3. Observe the product order.

**Expected Result:** Products should be arranged from lowest to highest price.

### TC010 – Verify Product Details

**Test Scenario:** Verify product information.

**Test Steps:**
1. Open any product.
2. Check its name and image.
3. Verify its description and price.
4. Check the Add to Cart button.

**Expected Result:** Correct product information should be displayed.

---

## 5. Shopping Cart Testing

### TC011 – Add Product to Cart

**Test Scenario:** Verify that a product can be added to the shopping cart.

**Test Steps:**
1. Open the Products page.
2. Select a product.
3. Click Add to Cart.
4. Observe the cart icon.

**Expected Result:** The selected product should be added to the cart and the cart count should increase.

### TC012 – Verify Cart Item Count

**Test Scenario:** Verify the shopping cart item count.

**Test Steps:**
1. Add one product to the cart.
2. Observe the cart badge.
3. Add another product.
4. Observe the updated cart count.

**Expected Result:** The cart badge should correctly reflect the number of added products.

### TC013 – Remove Product from Cart

**Test Scenario:** Verify product removal functionality.

**Test Steps:**
1. Add a product to the cart.
2. Open the shopping cart.
3. Click the Remove button.
4. Observe the cart contents.

**Expected Result:** The selected product should be removed from the cart.

---

## 6. Checkout Testing

### TC014 – Proceed to Checkout

**Test Scenario:** Verify navigation to the checkout page.

**Test Steps:**
1. Add a product to the cart.
2. Open the shopping cart.
3. Click Checkout.

**Expected Result:** The checkout information page should open.

### TC015 – Checkout with Empty Fields

**Test Scenario:** Verify checkout form validation.

**Test Steps:**
1. Open the checkout information page.
2. Leave all input fields empty.
3. Click Continue.

**Expected Result:** The application should display a validation error.

### TC016 – Complete Checkout with Valid Details

**Test Scenario:** Verify successful order completion.

**Test Steps:**
1. Enter a valid first name.
2. Enter a valid last name.
3. Enter a postal code.
4. Click Continue.
5. Review the order summary.
6. Click Finish.

**Expected Result:** The order should be completed and a confirmation message should be displayed.

---

## 7. Testing Summary

The product, sorting, cart and checkout modules have been covered through test-case design.

The scenarios include:
- Product display verification
- Product sorting
- Product information verification
- Add to Cart functionality
- Cart item count
- Product removal
- Checkout navigation
- Checkout validation and completion

---

## 8. Conclusion

This document covers the functional test scenarios designed for the product, shopping cart and checkout modules of SauceDemo.

The test cases help evaluate important e-commerce workflows and provide a structured foundation for manual software testing.

---

## 9. Future Scope

- API Testing using Postman
- Database Testing using SQL
- Automation Testing using Playwright

**Project:** E-commerce Website QA Testing Project

**Platform:** GitHub

