"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enums_js_1 = require("../types/enums.js");
const data_js_1 = __importDefault(require("./data.js"));
const updateChannelMessage = async (changes) => {
    const existingMessage = data_js_1.default.findMessage(changes.id);
    if (!existingMessage) {
        return {
            operation: enums_js_1.MutationType.update,
            error: 'not-found',
        };
    }
    Object.assign(existingMessage, changes);
    return {
        operation: enums_js_1.MutationType.update,
        object: existingMessage,
    };
};
exports.default = updateChannelMessage;
