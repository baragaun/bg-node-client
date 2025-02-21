"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const Channel_js_1 = require("../types/models/Channel.js");
const enums_js_1 = require("../types/enums.js");
const data_js_1 = __importDefault(require("./data.js"));
const createChannel = async (attributes) => {
    const channel = new Channel_js_1.Channel(attributes);
    if (!channel.id) {
        channel.id = faker_1.faker.string.uuid();
    }
    if (!channel.name) {
        channel.name = faker_1.faker.lorem.word();
    }
    if (!channel.description) {
        channel.description = faker_1.faker.lorem.paragraph();
    }
    if (!channel.topic) {
        channel.topic = faker_1.faker.lorem.sentence();
    }
    if (!channel.createdAt) {
        channel.createdAt = new Date();
    }
    if (!channel.updatedAt) {
        channel.updatedAt = new Date();
    }
    data_js_1.default.addChannel(channel);
    return {
        operation: enums_js_1.MutationType.create,
        object: channel
    };
};
exports.default = createChannel;
