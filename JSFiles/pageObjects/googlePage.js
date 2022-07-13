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
exports.GooglePage = void 0;
const protractor_1 = require("protractor");
class GooglePage {
    constructor() {
        this.googleInput = (0, protractor_1.element)(protractor_1.by.css('input[name="q"]'));
        this.googleSubmit = (0, protractor_1.element)(protractor_1.by.css('input[name="btnK"]'));
    }
    getGoogleLink(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.get(url);
        });
    }
    ;
    setKeyword(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.googleInput.sendKeys(name);
        });
    }
    ;
    submitKeyword() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, protractor_1.element)(protractor_1.by.css('input[name="btnK"]')).click();
        });
    }
    ;
}
exports.GooglePage = GooglePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL2dvb2dsZVBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTZFO0FBRTdFLE1BQWEsVUFBVTtJQUF2QjtRQUVJLGdCQUFXLEdBQWtCLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUNoRSxpQkFBWSxHQUFrQixJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7SUFlcEUsQ0FBQztJQWJLLGFBQWEsQ0FBRSxHQUFXOztZQUM1QixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7S0FBQTtJQUFBLENBQUM7SUFHRSxVQUFVLENBQUUsSUFBWTs7WUFDMUIsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxDQUFDO0tBQUE7SUFBQSxDQUFDO0lBRUUsYUFBYTs7WUFDZixNQUFNLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0RCxDQUFDO0tBQUE7SUFBQSxDQUFDO0NBRUg7QUFsQkwsZ0NBa0JLIn0=