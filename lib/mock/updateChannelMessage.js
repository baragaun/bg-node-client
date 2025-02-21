"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enums_js_1 = require("../types/enums.js");
const store_js_1 = __importDefault(require("./store.js"));
const updateChannelMessage = async (changes) => {
    try {
        const updatedChannelMessage = store_js_1.default.updateObject(changes, enums_js_1.ModelType.ChannelMessage);
        if (!updatedChannelMessage) {
            return {
                operation: enums_js_1.MutationType.update,
                error: 'not-found',
            };
        }
        return {
            operation: enums_js_1.MutationType.update,
            object: updatedChannelMessage,
        };
    }
    catch (error) {
        return {
            operation: enums_js_1.MutationType.update,
            error: error.message,
        };
    }
};
exports.default = updateChannelMessage;
