const {test,expect} = require('@playwright/test');

test('Dropdown menu',async({page})=>
{
   await page.goto("https://www.letskodeit.com/practice");
   await page.locator('#carselect').selectOption('Benz');
   await page.waitForTimeout(2000);

// to get the values of all the options present in the dropdown menu

   const options = await page.locator("//select[@id='carselect']/option").allTextContents();
   console.log(options.length);
   console.log(options);
   for(let i=0;i<options.length;i++)
   {
    console.log(options[i]);
   }

});
