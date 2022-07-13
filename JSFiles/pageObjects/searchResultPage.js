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
exports.SearchResultPage = void 0;
const protractor_1 = require("protractor");
class SearchResultPage {
    constructor() {
        this.searchKeyword = (0, protractor_1.element)(protractor_1.by.css('h3.DKV0Md.MBeuO.DKV0Md'));
    }
    checkSearchPage(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const EC = protractor_1.protractor.ExpectedConditions;
            yield protractor_1.browser.wait(EC.urlContains(name));
        });
    }
    ;
    clickKeyword() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.searchKeyword.click();
        });
    }
    ;
}
exports.SearchResultPage = SearchResultPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoUmVzdWx0UGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL3NlYXJjaFJlc3VsdFBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTZFO0FBRTdFLE1BQWEsZ0JBQWdCO0lBQTdCO1FBRUksa0JBQWEsR0FBa0IsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO0lBWXpFLENBQUM7SUFWSyxlQUFlLENBQUUsSUFBWTs7WUFDL0IsTUFBTSxFQUFFLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztZQUN6QyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDO0tBQUE7SUFBQSxDQUFDO0lBR0UsWUFBWTs7WUFDZCxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkMsQ0FBQztLQUFBO0lBQUEsQ0FBQztDQUVIO0FBZEwsNENBY0sifQ==