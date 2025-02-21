"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ChannelMessage_js_1 = require("../types/models/ChannelMessage.js");
const enums_js_1 = require("../types/enums.js");
const data_js_1 = __importDefault(require("./data.js"));
const createChannelMessage = async (channelMessage) => {
    const channel = data_js_1.default.findChannel(channelMessage.channelId);
    if (!channel) {
        return {
            operation: enums_js_1.MutationType.create,
            error: 'channel-not-found',
        };
    }
    const message = new ChannelMessage_js_1.ChannelMessage(channelMessage);
    channel.messages.push(message);
    return {
        operation: enums_js_1.MutationType.create,
        object: message,
    };
};
exports.default = createChannelMessage;
