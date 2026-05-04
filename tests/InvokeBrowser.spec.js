const {chromium} = require ('playwright');
(async()=>
{
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://playwright.dev/');
    await page.screenshot({path:'screenshot.png'});
    await browser.close();
})