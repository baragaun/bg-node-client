"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const channel_js_1 = __importDefault(require("./channel.js"));
const channelMessage_js_1 = __importDefault(require("./channelMessage.js"));
const user_js_1 = __importDefault(require("./user.js"));
const factories = {
    channel: channel_js_1.default,
    channelMessage: channelMessage_js_1.default,
    user: user_js_1.default,
};
exports.default = factories;
