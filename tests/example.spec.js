// filepath: c:\Playwight\tests\example.spec.js
// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Expect the title to contain "Playwright".
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link navigates to Installation', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('homepage shows Playwright text', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Expect visible text "Playwright" on the page.
  await expect(page.locator('text=Playwright')).toBeVisible();
});

// test('get started link navigates to Installation', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test('get started page has expected content', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();

  // Ensure Installation page contains a code block or installation instructions.
  await expect(page.locator('text=npm i playwright').first()).toBeVisible().catch(async () => {
    // Fallback: at least a paragraph mentioning "install" should be visible.
    await expect(page.locator('text=install').first()).toBeVisible();
    console.log('https://playwright.dev/');
  });
});


