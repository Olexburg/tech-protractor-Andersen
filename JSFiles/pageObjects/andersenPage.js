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
exports.AndersenPage = void 0;
const protractor_1 = require("protractor");
class AndersenPage {
    constructor() {
        this.searchElement = (0, protractor_1.element)(protractor_1.by.css('h1.title-module--title--xW-ym'));
    }
    checkAndersenLink(link) {
        return __awaiter(this, void 0, void 0, function* () {
            const EC = protractor_1.protractor.ExpectedConditions;
            yield protractor_1.browser.wait(EC.urlIs(link));
        });
    }
    ;
    checkText(text) {
        return __awaiter(this, void 0, void 0, function* () {
            const EC = protractor_1.protractor.ExpectedConditions;
            yield protractor_1.browser.wait(EC.textToBePresentInElement((0, protractor_1.element)(protractor_1.by.css('h1.title-module--title--xW-ym')), text));
        });
    }
    ;
}
exports.AndersenPage = AndersenPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5kZXJzZW5QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvYW5kZXJzZW5QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUE2RTtBQUU3RSxNQUFhLFlBQVk7SUFBekI7UUFFSSxrQkFBYSxHQUFrQixJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7SUFZaEYsQ0FBQztJQVZTLGlCQUFpQixDQUFFLElBQVk7O1lBQ3JDLE1BQU0sRUFBRSxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7WUFDekMsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQztLQUFBO0lBQUEsQ0FBQztJQUVFLFNBQVMsQ0FBRSxJQUFZOztZQUN6QixNQUFNLEVBQUUsR0FBRyx1QkFBVSxDQUFDLGtCQUFrQixDQUFDO1lBQ3pDLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLHdCQUF3QixDQUFDLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzFHLENBQUM7S0FBQTtJQUFBLENBQUM7Q0FFSDtBQWRMLG9DQWNLIn0=