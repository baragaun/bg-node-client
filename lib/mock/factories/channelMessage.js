"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const ChannelMessage_js_1 = require("../../types/models/ChannelMessage.js");
const createMessage = (attributes, sender) => {
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
    if (!message.updatedAt) {
        message.updatedAt = new Date();
    }
    if (!message.createdAt) {
        message.createdAt = new Date();
    }
    if (!message.createdBy && sender) {
        message.createdBy = sender.id;
    }
    if (!message.updatedAt) {
        message.updatedAt = new Date();
    }
    if (!message.metadata && sender) {
        message.metadata = {
            senderUserHandle: sender.userHandle,
            senderFirstName: sender.firstName,
            senderLastName: sender.lastName,
            senderAvatarUrl: sender.avatarUrl,
        };
    }
    return message;
};
exports.default = createMessage;
