"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enums_js_1 = require("../types/enums.js");
const store_js_1 = __importDefault(require("./store.js"));
const updateChannel = async (changes) => {
    try {
        const updatedChannel = store_js_1.default.updateObject(changes, enums_js_1.ModelType.Channel);
        if (!updatedChannel) {
            return {
                operation: enums_js_1.MutationType.update,
                error: 'not-found',
            };
        }
        return {
            operation: enums_js_1.MutationType.update,
            object: updatedChannel,
        };
    }
    catch (error) {
        return {
            operation: enums_js_1.MutationType.update,
            error: error.message,
        };
    }
};
exports.default = updateChannel;
