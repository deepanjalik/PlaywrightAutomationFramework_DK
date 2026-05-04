import {test,expect} from '@playwright/test';
test('Actions-Chcekbox or Radiobutton', async({page})=>
{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox',{name:'Username'}).fill('Admin');
    await page.getByRole('textbox',{name:'Password'}).fill('admin123');
    await page.getByRole('button',{name:'Login'}).click();
    await page.getByRole('link',{name:'My Info'}).click();
    await page.waitForLoadState('networkidle');
    await page.locator("input[value='2']").check();
});