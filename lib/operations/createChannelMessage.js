"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_js_1 = require("../types/enums.js");
const createChannelMessage = async (channelMessage) => {
    // todo: implement
    return {
        operation: enums_js_1.MutationType.create,
        object: channelMessage
    };
};
exports.default = createChannelMessage;
