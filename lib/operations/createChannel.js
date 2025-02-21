"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Channel_js_1 = require("../types/models/Channel.js");
const enums_js_1 = require("../types/enums.js");
const createChannel = async (channel) => {
    const newChannel = new Channel_js_1.Channel(channel);
    // todo: implement
    return {
        operation: enums_js_1.MutationType.create,
        object: newChannel
    };
};
exports.default = createChannel;
