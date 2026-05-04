const{test,expect} = require('@playwright/test');

test('Alert Box', async({page})=>
{
   await page.goto('https://testautomationpractice.blogspot.com/');
   page.on('dialog',async dialog1=>
      {
         console.log(dialog1.message());
         expect(dialog1.type()).toBe('alert');
         expect(dialog1.message()).toContain('I am an alert box!');
         await page.waitForTimeout(3000);
         await dialog1.accept();
      });
      await page.locator('#alertBtn').click();
      await page.waitForTimeout(3000);

});

test('Confirm Box',async({page})=>
{
   await page.goto('https://testautomationpractice.blogspot.com/');

   page.on('dialog',async dialog1=>
      {
         console.log(dialog1.message());
         expect(dialog1.type()).toBe('confirm'); 
         expect(dialog1.message()).toContain('Press a button!');
         await page.waitForTimeout(3000);
         await dialog1.accept();
      });

      await page.locator('#confirmBtn').click();
      await page.waitForTimeout(3000);

});

test('Prompt alert box',async({page})=>
{
   await page.goto('https://testautomationpractice.blogspot.com/');

   page.on('dialog',async dialog1=>
      {
        console.log(dialog1.message());
        expect(dialog1.type()).toBe('prompt');
        expect(dialog1.message()).toContain('Please enter your name:');
        await page.waitForTimeout(3000);
        await dialog1.accept();
      });

      await page.locator('#promptBtn').click();
      await page.waitForTimeout(3000);
});