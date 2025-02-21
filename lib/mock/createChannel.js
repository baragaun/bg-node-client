"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Channel_js_1 = require("../types/models/Channel.js");
const enums_js_1 = require("../types/enums.js");
const data_js_1 = __importDefault(require("./data.js"));
const createChannel = async (channel) => {
    const newChannel = new Channel_js_1.Channel(channel);
    data_js_1.default.addChannel(newChannel);
    return {
        operation: enums_js_1.MutationType.create,
        object: newChannel
    };
};
exports.default = createChannel;
