"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enums_js_1 = require("../types/enums.js");
const store_js_1 = __importDefault(require("./store.js"));
const deleteChannelMessage = async (id) => {
    try {
        store_js_1.default.deleteObject(id, enums_js_1.ModelType.ChannelMessage);
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
