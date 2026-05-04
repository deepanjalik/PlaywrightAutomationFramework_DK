const {test,expect} = require('@playwright/test');

test('Assertion example', async ({page}) =>
{
   await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');
   console.log("URL: " + page.url());
   await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F');
   
   const firstName = page.locator('#FirstName');
   firstName.fill('ABC');
   await expect(firstName).toBeVisible();
   console.log("FirstName: " +await firstName.inputValue());


   const lastName = page.locator('#LastName');
   lastName.fill('XYZ');
   await expect(lastName).toBeVisible();
   console.log("LastName: " +await lastName.inputValue());

   const gender = page.locator('#gender-male');
   gender.check();
   await expect(gender).toBeChecked();

   const femaleGender = page.getByRole('radio',{name : 'Female'});
   femaleGender.check();
   await expect(femaleGender).toBeChecked();

   const newsletter = page.getByRole('checkbox',{name: 'Newsletter'});
   newsletter.check();
   await expect(newsletter).toBeChecked();

   const emailid = page.locator('#Email');
   emailid.fill('test@gmail.com');
   await expect(emailid).toBeVisible();
   console.log("Email: " + await emailid.inputValue());
});