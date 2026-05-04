const {test,expect} = require("@playwright/test");

const {LoginPage} = require("../PageFactory/LoginPage");

test('Login to OrangeHRM application',async({page})=>
{

   let lp = new LoginPage(page,expect);

   await lp.openUrl();
   await lp.enterUserLoginCredentials("Admin","admin123");
   await lp.clickLoginBtn();

});