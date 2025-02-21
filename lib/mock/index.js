"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createChannel_js_1 = __importDefault(require("./createChannel.js"));
const createChannelMessage_js_1 = __importDefault(require("./createChannelMessage.js"));
const deleteChannel_js_1 = __importDefault(require("./deleteChannel.js"));
const deleteChannelMessage_js_1 = __importDefault(require("./deleteChannelMessage.js"));
const findChannelMessages_js_1 = __importDefault(require("./findChannelMessages.js"));
const findChannels_js_1 = __importDefault(require("./findChannels.js"));
const updateChannel_js_1 = __importDefault(require("./updateChannel.js"));
const updateChannelMessage_js_1 = __importDefault(require("./updateChannelMessage.js"));
const mockOperations = {
    createChannel: createChannel_js_1.default,
    createChannelMessage: createChannelMessage_js_1.default,
    deleteChannel: deleteChannel_js_1.default,
    deleteChannelMessage: deleteChannelMessage_js_1.default,
    findChannelMessages: findChannelMessages_js_1.default,
    findChannels: findChannels_js_1.default,
    updateChannel: updateChannel_js_1.default,
    updateChannelMessage: updateChannelMessage_js_1.default,
};
exports.default = mockOperations;
