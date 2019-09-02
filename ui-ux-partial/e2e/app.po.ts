import { browser, by, element, $, $$, ExpectedConditions as EC } from 'protractor';

export class Page {

    navigateTo(destination) {
        return browser.get(destination);
    }

    getTitle() {
        return browser.getTitle();
    }

    enterText(className: string, value: string) {
        return $(`.${className} input`).sendKeys(value);
        //return element(by.className(className)).sendKeys(value);
    }

    clickButton(className: string) {
        return element(by.className(className)).click();
    }

    getElementTextByClass(className: string) {
        return element(by.className(className)).getText();
    }

    getPageOneTitleText() {
        return element(by.tagName('page-page1')).element(by.tagName('ion-title')).element(by.css('.toolbar-title')).getText();
    }

	getPageName = () => this.getElementTextByClass('TITLE');
	getPageTitle = () => $$('ion-title').last().getText();
    sleep = (mseconds: number) => browser.driver.sleep(mseconds);

    /**
     * waiting for particular title to appear on the page
     * @param title
     */
	waitForTheTitle(title: string) {
        return browser.driver.wait(EC.textToBePresentInElement($$('ion-title').last(), title), 10000);
    }

}
