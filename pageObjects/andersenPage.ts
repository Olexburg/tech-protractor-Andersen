import { by, element, browser, protractor, ElementFinder } from "protractor";

export class AndersenPage {
       
    searchElement: ElementFinder = element(by.css('h1.title-module--title--xW-ym'));
    
    async checkAndersenLink (link: string):Promise<void> {
        const EC = protractor.ExpectedConditions;
        await browser.wait(EC.urlIs(link));
      };
    
    async checkText (text: string):Promise<void> {
        const EC = protractor.ExpectedConditions;
        await browser.wait(EC.textToBePresentInElement(element(by.css('h1.title-module--title--xW-ym')), text));
      };
    
}