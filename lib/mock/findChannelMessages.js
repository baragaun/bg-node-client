"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../types/enums");
const store_js_1 = __importDefault(require("./store.js"));
const findChannelMessages = async (filter, skip, limit) => {
    if (filter.id) {
        const message = store_js_1.default.findObjectById(filter.id, enums_1.ModelType.ChannelMessage);
        return message ? [message] : [];
    }
    const messages = store_js_1.default.getObjects(enums_1.ModelType.ChannelMessage);
    let list = messages;
    if (!filter.channelId) {
        list = messages.filter(m => m.channelId === filter.channelId);
    }
    if (skip > 0 && limit > 0) {
        list = list.slice(skip, skip + limit);
    }
    return list.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
};
exports.default = findChannelMessages;
