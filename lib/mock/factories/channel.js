"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const Channel_js_1 = require("../../types/models/Channel.js");
const ChannelParticipant_js_1 = require("../../types/models/ChannelParticipant.js");
const user_js_1 = __importDefault(require("./user.js"));
const channelMessage_js_1 = __importDefault(require("./channelMessage.js"));
const createChannel = (attributes, userCount, messageCount, users, messages) => {
    if (!attributes.id) {
        attributes.id = faker_1.faker.string.uuid();
    }
    if (!attributes.name) {
        attributes.name = faker_1.faker.lorem.word();
    }
    if (!attributes.description) {
        attributes.description = faker_1.faker.lorem.paragraph();
    }
    if (!attributes.topic) {
        attributes.topic = faker_1.faker.lorem.sentence();
    }
    if (!attributes.createdAt) {
        attributes.createdAt = new Date();
    }
    if (!attributes.updatedAt) {
        attributes.updatedAt = new Date();
    }
    const channel = new Channel_js_1.Channel(attributes);
    if (!Array.isArray(users) || users.length < 1) {
        users = Array.from({ length: userCount }, () => {
            return (0, user_js_1.default)({});
        });
    }
    if (!Array.isArray(messages) || users.length < 1) {
        messages = Array.from({ length: messageCount }, () => {
            return (0, channelMessage_js_1.default)({ channelId: attributes.id });
        });
    }
    channel.messages = messages;
    channel.users = users;
    channel.participants = users.map(user => new ChannelParticipant_js_1.ChannelParticipant({
        id: faker_1.faker.string.uuid(),
        userId: user.id
    }));
    return channel;
};
exports.default = createChannel;
