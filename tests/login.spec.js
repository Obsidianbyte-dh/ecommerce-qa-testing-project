const { test, expect } = require('@playwright/test');

async function login(page) {
  await page.goto('/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
}

test('PW001 - Valid login', async ({ page }) => {
  await login(page);
  await expect(page).toHaveURL(/inventory/);
});

test('PW002 - Invalid password', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('wrong_password');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test('PW003 - Empty username', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test('PW004 - Add product to cart', async ({ page }) => {
  await login(page);
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});

test('PW005 - Remove product from cart', async ({ page }) => {
  await login(page);
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('.shopping_cart_link').click();
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  await expect(page.locator('.cart_item')).toHaveCount(0);
  await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
});

test('PW006 - Navigate to checkout', async ({ page }) => {
  await login(page);
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('.shopping_cart_link').click();
  await page.locator('[data-test="checkout"]').click();
  await expect(page).toHaveURL(/checkout-step-one/);
});

test('PW007 - Checkout with empty details', async ({ page }) => {
  await login(page);
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('.shopping_cart_link').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="continue"]').click();

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

test('PW008 - Checkout with valid details', async ({ page }) => {
  await login(page);
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('.shopping_cart_link').click();
  await page.locator('[data-test="checkout"]').click();

  await page.locator('[data-test="firstName"]').fill('QA');
  await page.locator('[data-test="lastName"]').fill('Tester');
  await page.locator('[data-test="postalCode"]').fill('490001');
  await page.locator('[data-test="continue"]').click();

  await expect(page).toHaveURL(/checkout-step-two/);
});

test('PW009 - Complete an order successfully', async ({ page }) => {
  await login(page);

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('.shopping_cart_link').click();
  await page.locator('[data-test="checkout"]').click();

  await page.locator('[data-test="firstName"]').fill('QA');
  await page.locator('[data-test="lastName"]').fill('Tester');
  await page.locator('[data-test="postalCode"]').fill('490001');
  await page.locator('[data-test="continue"]').click();

  await page.locator('[data-test="finish"]').click();

  await expect(page.locator('.complete-header'))
    .toHaveText('Thank you for your order!');
});
test('PW010 - User can log out successfully', async ({ page }) => {
  await login(page);

  await page.locator('#react-burger-menu-btn').click();
  await page.locator('#logout_sidebar_link').click();

  await expect(page).toHaveURL('/');
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});
