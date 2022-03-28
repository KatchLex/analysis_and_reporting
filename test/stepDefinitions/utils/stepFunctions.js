const EC = protractor.ExpectedConditions;
const pageObject = require('../../pageObjects/westerndigital.json');
const logger = require('../../config/loggerConfig.js').logger;

    const getPageObjectElement = (alias) => {
        let pageElement = pageObject[alias];
        if (pageElement['isCollection'] === true) {
            pageElement = element.all(by.css(pageElement.selector));
            return pageElement;
        }
        else {
            pageElement = element(by.css(pageElement.selector));
            return pageElement;
        }
    };

    const expectedCondition = (shouldBe) => {
        let expectedConditionFunction;
    
        switch (shouldBe) {
            case "present":
                expectedConditionFunction = EC.presenceOf.bind(EC);
                break;
            case "clickable":
                expectedConditionFunction = EC.elementToBeClickable.bind(EC);
                break;
            case "visible":
                expectedConditionFunction = EC.visibilityOf.bind(EC);
                break;
            case "invisible":
                expectedConditionFunction = EC.invisibilityOf.bind(EC);
                break;
            case "selected":
                expectedConditionFunction = EC.elementToBeSelected.bind(EC);
                break;
            case "gone":
                expectedConditionFunction = EC.stalenessOf.bind(EC);
                break;
            default:
                logger.error(`Wrong expected condition provided: [${shouldBe}]`);
                throw new Error('Wrong expected condition provided.');
        }
        return expectedConditionFunction;
    };

    // const highlightElement = (alias) => {
    //     const styleOptions = "color: Red; border: 2px solid red;";
    //     const webElement = getPageObjectElement(alias).getWebElement();
    //     return browser.executeScript("arguments[0].setAttribute('style', arguments[1]);", webElement, styleOptions).then(() => {
    //         return browser.wait(() => {
    //             return getPageObjectElement(alias).getCssValue('border').then((border) => {
    //                 return border.toString().indexOf('2px solid rgb(255,') > -1;
    //             });
    //         }, 5000, 'Style is not applied!');
    //     }, (error)=> {
    //         loggers.error('Error is: ' + error);
    //     });
    // };

    const highlightElement = async(alias) => {
        try {
          const styleOptions = "color: Red; border: 2px solid red;";
          const webElement = getPageObjectElement(alias).getWebElement();
          await browser.executeScript("arguments[0].setAttribute('style', arguments[1]);", webElement, styleOptions);
          await browser.getPageObjectElement(alias).getCssValue('border');
          await wait((border.toString().indexOf('2px solid rgb(255,') > -1), 5000);
          throw Error('Style is not applied!')
        } catch(error) {
            logger.error('Error is: ' + error);
        }
    };

    module.exports = {
        getPageObjectElement,
        expectedCondition,
        highlightElement
    }