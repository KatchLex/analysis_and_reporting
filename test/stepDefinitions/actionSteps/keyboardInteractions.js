"use strict";
const { When } = require('cucumber');
const elementHelper = require('../utils/stepFunctions.js').getPageObjectElement;
const { Key }  = require('selenium-webdriver');
const logger = require('../../config/loggerConfig.js').logger;

When(/^I type "([^"]*)" text in "([^"]*)"$/, async (text, alias) => {
    logger.info(`I type ${text}`);
    await elementHelper(alias).sendKeys(text, Key.ENTER);
});