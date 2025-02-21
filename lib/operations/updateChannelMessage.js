"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_js_1 = require("../types/enums.js");
const updateChannelMessage = async (changes) => {
    // todo: implement
    return {
        operation: enums_js_1.MutationType.update,
        object: changes
    };
};
exports.default = updateChannelMessage;
