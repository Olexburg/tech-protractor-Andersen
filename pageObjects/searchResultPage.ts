import { by, element, browser, protractor, ElementFinder } from "protractor";

export class SearchResultPage {
       
    searchKeyword: ElementFinder = element(by.css('h3.DKV0Md.MBeuO.DKV0Md'));
    
    async checkSearchPage (name: string):Promise<void> {
        const EC = protractor.ExpectedConditions;
        await browser.wait(EC.urlContains(name));
      };
        
    async clickKeyword ():Promise<void> {
        await this.searchKeyword.click();
      };
    
}