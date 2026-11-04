const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
 reporter: [
  ['list'],
  ['html', { outputFolder: 'playwright-report', open: 'never' }]
],
  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: true
  }
});
