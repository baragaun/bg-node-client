"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enums_js_1 = require("../types/enums.js");
const data_js_1 = __importDefault(require("./data.js"));
const deleteChannelMessage = async (id) => {
    try {
        data_js_1.default.deleteChannelMessage(id);
        return {
            operation: enums_js_1.MutationType.delete,
        };
    }
    catch (error) {
        return {
            operation: enums_js_1.MutationType.delete,
            error: error.message,
        };
    }
};
exports.default = deleteChannelMessage;
