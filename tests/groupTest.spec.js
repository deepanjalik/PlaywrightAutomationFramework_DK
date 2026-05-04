import { test, expect } from '@playwright/test';

test.describe('two tests', () => 
  {
  test('one', async ({ page }) => 
  {
    await page.goto('https://www.google.com');
  });

  test('two', async ({ page }) => 
 {
    await page.goto('https://playwright.dev/');
  });
});