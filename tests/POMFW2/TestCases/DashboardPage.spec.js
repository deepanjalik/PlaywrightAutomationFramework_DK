const{test,expect} = require("@playwright/test");

const {LoginPage} = require("../PageFactory/LoginPage.js");
const {DashboardPage} = require("../PageFactory/DashboardPage.js");


test('Dashboard Page Test', async({page})=>
{
    let lp = new LoginPage(page,expect);
    let dp = new DashboardPage(page,expect);
    await lp.openUrl();
    await lp.enterUserLoginCredentials("Admin","admin123");
    await lp.clickLoginBtn();
    await dp.clickPIMMenu();
    await dp.clickAddBtn();
    await dp.enterEmployeeDetails("John","Smith");
    await dp.clickSaveBtn();
    await page.waitForTimeout(8000);
    await dp.clickPIMMenu();
    await page.waitForTimeout(3000);
    await dp.searchEmployee("John");
    await dp.clickSearchBtn();
    await page.waitForTimeout(3000);

});