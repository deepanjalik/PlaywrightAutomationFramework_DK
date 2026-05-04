import {test,expect} from '@playwright/test';

test('Base URL Demo', async ({page})=>
{
 
    await page.goto('/');
    await page.waitForTimeout(3000);
});