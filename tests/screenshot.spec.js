import {test,expect} from '@playwright/test';

test('Screenshot of homepage',async ({page}) =>
{
    await page.goto('https://www.google.com');
    await page.getByText('Gmail1').click();
    await page.waitForTimeout(1000);
    await page.screenshot({path:'screenshot.png'});
    const path = await page.video().path();

});

// test('screenshot of homepage', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await page.screenshot({ path: 'homepage.png' });
// });

// test('screenshot of get started page', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await page.getByRole('link', { name: 'Get started' }).click();
//   await page.screenshot({ path: 'get-started.png' });
// });     


