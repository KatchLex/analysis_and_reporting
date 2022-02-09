"use strict";
const { When } = require('cucumber');
const { Key }  = require('selenium-webdriver');
const logger = require('../../config/loggerConfig.js').logger;

When(/^I type "([^"]*)" text$/, (text) => {
    logger.info(`I type ${text}`);
    return browser.sendKeys(text, Key.ENTER);
});