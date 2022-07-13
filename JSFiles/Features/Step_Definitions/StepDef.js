"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const googlePage_1 = require("../../pageObjects/googlePage");
const searchResultPage_1 = require("../../pageObjects/searchResultPage");
const andersenPage_1 = require("../../pageObjects/andersenPage");
const googlePage = new googlePage_1.GooglePage();
const searchResultPage = new searchResultPage_1.SearchResultPage();
const andersenPage = new andersenPage_1.AndersenPage();
(0, cucumber_1.Given)('I have got opened Google search page', { timeout: 60 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield googlePage.getGoogleLink('https://www.google.com/');
}));
(0, cucumber_1.When)('I text Andersenlab to search input', { timeout: 60 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield googlePage.setKeyword('andersenlab');
}));
(0, cucumber_1.When)('I click on the Submit button', { timeout: 60 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield googlePage.submitKeyword();
}));
(0, cucumber_1.Then)('I should be on the page with search results', { timeout: 60 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield searchResultPage.checkSearchPage('andersen');
}));
(0, cucumber_1.When)('I click on the Andersen Lab link', { timeout: 60 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield searchResultPage.clickKeyword();
}));
(0, cucumber_1.Then)('I should be redirected to Andersen site', { timeout: 60 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield andersenPage.checkAndersenLink('https://andersenlab.com/');
}));
(0, cucumber_1.Then)('I verify main page contains the text Software Development Company', { timeout: 60 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield andersenPage.checkText('Software Development Company');
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcERlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0ZlYXR1cmVzL1N0ZXBfRGVmaW5pdGlvbnMvU3RlcERlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUE0QztBQUM1QywyQ0FBNkQ7QUFDN0QsNkRBQTBEO0FBQzFELHlFQUFzRTtBQUN0RSxpRUFBOEQ7QUFFOUQsTUFBTSxVQUFVLEdBQWdCLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBQ2pELE1BQU0sZ0JBQWdCLEdBQXNCLElBQUksbUNBQWdCLEVBQUUsQ0FBQztBQUNuRSxNQUFNLFlBQVksR0FBa0IsSUFBSSwyQkFBWSxFQUFFLENBQUM7QUFFdkQsSUFBQSxnQkFBSyxFQUFDLHNDQUFzQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRSxHQUFTLEVBQUU7SUFDN0UsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLE1BQU0sVUFBVSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBQzlELENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFRixJQUFBLGVBQUksRUFBQyxvQ0FBb0MsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUUsR0FBUyxFQUFFO0lBQzFFLE1BQU0sVUFBVSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUYsSUFBQSxlQUFJLEVBQUMsOEJBQThCLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFLEdBQVMsRUFBRTtJQUNwRSxNQUFNLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUNyQyxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUYsSUFBQSxlQUFJLEVBQUMsNkNBQTZDLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFLEdBQVMsRUFBRTtJQUNuRixNQUFNLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN2RCxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUYsSUFBQSxlQUFJLEVBQUMsa0NBQWtDLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFLEdBQVMsRUFBRTtJQUN4RSxNQUFNLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzFDLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFRixJQUFBLGVBQUksRUFBQyx5Q0FBeUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUUsR0FBUyxFQUFFO0lBQy9FLE1BQU0sWUFBWSxDQUFDLGlCQUFpQixDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDckUsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVGLElBQUEsZUFBSSxFQUFDLG1FQUFtRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRSxHQUFTLEVBQUU7SUFDekcsTUFBTSxZQUFZLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDakUsQ0FBQyxDQUFBLENBQUMsQ0FBQSJ9