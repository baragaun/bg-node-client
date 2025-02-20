"use strict";
/** Copyright ©2025 Baragaun, Inc. - All rights reserved **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelEvent = void 0;
const enums_js_1 = require("../enums.js");
class ModelEvent {
    time = new Date();
    modelEventType = enums_js_1.ModelEventType.info;
    message = '';
    constructor(attributes) {
        if (attributes) {
            if (attributes.time) {
                if (attributes.time instanceof Date) {
                    this.time = attributes.time;
                }
                else {
                    this.time = new Date(attributes.time);
                }
            }
            if (attributes.modelEventType) {
                this.modelEventType = attributes.modelEventType;
            }
            if (attributes.message) {
                this.message = attributes.message;
            }
        }
    }
}
exports.ModelEvent = ModelEvent;
