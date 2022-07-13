import { Given, When, Then } from "cucumber";
import { browser, by, element, protractor } from "protractor";
import { GooglePage } from "../../pageObjects/googlePage";
import { SearchResultPage } from "../../pageObjects/searchResultPage";
import { AndersenPage } from "../../pageObjects/andersenPage";

const googlePage : GooglePage = new GooglePage();
const searchResultPage : SearchResultPage = new SearchResultPage();
const andersenPage : AndersenPage = new AndersenPage();

Given('I have got opened Google search page', { timeout: 60 * 1000 }, async () => {
    await browser.waitForAngularEnabled(false);
    await googlePage.getGoogleLink('https://www.google.com/');
})

When('I text Andersenlab to search input', { timeout: 60 * 1000 }, async () => {
    await googlePage.setKeyword('andersenlab');
})

When('I click on the Submit button', { timeout: 60 * 1000 }, async () => {
    await googlePage.submitKeyword();
})

Then('I should be on the page with search results', { timeout: 60 * 1000 }, async () => {
    await searchResultPage.checkSearchPage('andersen');
})

When('I click on the Andersen Lab link', { timeout: 60 * 1000 }, async () => {
    await searchResultPage.clickKeyword();
})

Then('I should be redirected to Andersen site', { timeout: 60 * 1000 }, async () => {
    await andersenPage.checkAndersenLink('https://andersenlab.com/');
})

Then('I verify main page contains the text Software Development Company', { timeout: 60 * 1000 }, async () => {
    await andersenPage.checkText('Software Development Company');
})


