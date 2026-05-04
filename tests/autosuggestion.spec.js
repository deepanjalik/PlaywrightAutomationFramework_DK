import {test,expect} from '@playwright/test';

test('Auto suggestion',async ({page}) =>
{

    await page.goto('https://www.letskodeit.com/practice');
    
    await page.locator('#autosuggest').fill('app');

    await page.waitForSelector('//li[@class="ui-menu-item"]');

    const menuOptions = await page.$$('//li[@class="ui-menu-item"]');

    for(const option of menuOptions)
    {
        const value = await option.textContent();
        console.log(value);
        if(value.includes('Appium Java'))
        {
            await option.click();
            break;
        }
    }
});