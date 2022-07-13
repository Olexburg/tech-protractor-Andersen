import { by, element, browser, protractor, ElementFinder } from "protractor";

export class GooglePage {
       
    googleInput: ElementFinder = element(by.css('input[name="q"]'));
    googleSubmit: ElementFinder = element(by.css('input[name="btnK"]'));

    async getGoogleLink (url: string):Promise<void> {
        await browser.get(url);
      };
    
    async setKeyword (name: string):Promise<void> {
        await this.googleInput.sendKeys(name);
      };

    async submitKeyword ():Promise<void> {
        await element(by.css('input[name="btnK"]')).click();
      };
    
}