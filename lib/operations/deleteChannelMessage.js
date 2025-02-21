"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_js_1 = require("../types/enums.js");
const deleteChannelMessage = async (id) => {
    // todo: implement
    return {
        operation: enums_js_1.MutationType.delete,
    };
};
exports.default = deleteChannelMessage;
