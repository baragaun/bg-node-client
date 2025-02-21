"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("../types/enums");
const store_js_1 = __importDefault(require("./store.js"));
const findChannels = async (filter, skip, limit) => {
    if (filter.id) {
        const channel = store_js_1.default.findObjectById(filter.id, enums_1.ModelType.Channel);
        return channel ? [channel] : [];
    }
    const channels = store_js_1.default.getObjects(enums_1.ModelType.Channel);
    let list = channels;
    if (filter.userId) {
        list = channels.filter((channel) => {
            if (!Array.isArray(channel.userIds)) {
                return false;
            }
            return channel.userIds.includes(filter.userId);
        });
    }
    if (filter.name) {
        list = channels.filter(c => c.name && c.name.localeCompare(filter.name) === 0);
    }
    if (skip > 0 && limit > 0) {
        list = list.slice(skip, skip + limit);
    }
    return list.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
};
exports.default = findChannels;
