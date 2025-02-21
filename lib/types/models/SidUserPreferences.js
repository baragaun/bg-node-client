"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidUserPreferences = void 0;
const BaseModel_js_1 = require("./BaseModel.js");
class SidUserPreferences extends BaseModel_js_1.BaseModel {
    shareEmail;
    sharePhoneNumber;
    showWelcomeMessage;
    notificationOptions;
    constructor(attributes) {
        super(attributes);
        if (attributes) {
            if (attributes.shareEmail === true || attributes.shareEmail === false) {
                this.shareEmail = attributes.shareEmail;
            }
            if (attributes.sharePhoneNumber === true || attributes.sharePhoneNumber === false) {
                this.sharePhoneNumber = attributes.sharePhoneNumber;
            }
            if (attributes.showWelcomeMessage === true || attributes.showWelcomeMessage === false) {
                this.showWelcomeMessage = attributes.showWelcomeMessage;
            }
            if (attributes.notificationOptions) {
                this.notificationOptions = attributes.notificationOptions;
            }
        }
    }
}
exports.SidUserPreferences = SidUserPreferences;
