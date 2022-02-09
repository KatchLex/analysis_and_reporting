"use strict";
const { After } = require('cucumber');
const { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);

After(async function () {
    const screenshot = await browser.takeScreenshot();
    const decodedImage = new Buffer.from(screenshot, 'base64');    
    return this.attach(decodedImage, 'image/png');
});