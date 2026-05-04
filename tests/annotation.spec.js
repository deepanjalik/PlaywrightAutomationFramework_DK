import {test,expect} from '@playwright/test';

test.skip('Annotation1 Skip example',async ({page}) =>
{
  await page.goto('https:playwright.dev/');
  await page.waitForTimeout(1000);
});

test.fail('Annotation2 Fail example',async ({page})=>
{

    await page.goto('https:google.com/');
    await expect(page).toHaveTitle('Playwright');
    await page.waitForTimeout(1000);
});

test.fixme('Annotation3 Fixme example',async ({page})=>
{
   await page.goto('https:playwright.dev/');
   await expect(page).toHaveTitle('Playwright123');
   await page.waitForTimeout(1000);

});

test.slow('Annotation4 Slow example',async ({page})=>
{
    await page.goto('https:playwright.dev/');
    await expect(page).toHaveTitle('Playwright');
    await page.waitForTimeout(1000);
});

test('skip this test', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Still working on it');
});