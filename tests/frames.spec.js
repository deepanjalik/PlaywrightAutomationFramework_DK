import {test,expect} from '@playwright/test';

test('Frames Demo', async({page}) =>

{
    await page.goto('https://ui.vision/demo/webtest/frames/');

    // to get all the frames present in the webpage
    const allframes = page.frames();
    console.log(allframes.length);

    

});