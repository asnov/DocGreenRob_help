import { browser, by, element, $ } from 'protractor';

export class Page {

	navigateTo(destination) {
		return browser.get(destination);
	}

	getTitle() {
		return browser.getTitle();
	}
	
	// doTest(){
	// 	element(by.className('USER-NAME')).sendKeys('test-owner');
	// 	element(by.className('PASSWORD')).sendKeys('abc@123');
	// 	return element(by.className('LOGIN')).click();
	// }

	// getElementTextByClass(){
	// 	return element(by.className('TITLE')).getText();
	// }


	enterText(className: string, value: string) {
		return $(`.${className} input`).sendKeys(value);
		//return element(by.className(className)).sendKeys(value);
	}

	clickButton(className:string){
		return element(by.className(className)).click();
	}

	getElementTextByClass(className:string){
		return element(by.className(className)).getText();
	}

	getPageOneTitleText() {
		return element(by.tagName('page-page1')).element(by.tagName('ion-title')).element(by.css('.toolbar-title')).getText();
	}
	
}
