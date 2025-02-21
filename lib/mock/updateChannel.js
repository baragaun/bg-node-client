"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enums_js_1 = require("../types/enums.js");
const data_js_1 = __importDefault(require("./data.js"));
const updateChannel = async (changes) => {
    const existingChannel = data_js_1.default.findChannel(changes.id);
    if (!existingChannel) {
        return {
            operation: enums_js_1.MutationType.update,
            error: 'not-found',
        };
    }
    Object.assign(existingChannel, changes);
    return {
        operation: enums_js_1.MutationType.update,
        object: existingChannel,
    };
};
exports.default = updateChannel;
