"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const ChannelMessage_js_1 = require("../types/models/ChannelMessage.js");
const enums_js_1 = require("../types/enums.js");
const store_js_1 = __importDefault(require("./store.js"));
const createChannelMessage = async (attributes) => {
    const channel = store_js_1.default.findObjectById(attributes.channelId, enums_js_1.ModelType.Channel);
    if (!channel) {
        return {
            operation: enums_js_1.MutationType.create,
            error: 'channel-not-found',
        };
    }
    const message = new ChannelMessage_js_1.ChannelMessage(attributes);
    if (!message.id) {
        message.id = faker_1.faker.string.uuid();
    }
    if (!message.messageText) {
        message.messageText = faker_1.faker.lorem.paragraph();
    }
    if (!message.createdAt) {
        message.createdAt = new Date();
    }
    if (!channel.updatedAt) {
        channel.updatedAt = new Date();
    }
    try {
        store_js_1.default.addObject(message);
        return {
            operation: enums_js_1.MutationType.create,
            object: message,
        };
    }
    catch (error) {
        return {
            operation: enums_js_1.MutationType.create,
            error: error.message,
        };
    }
};
exports.default = createChannelMessage;
