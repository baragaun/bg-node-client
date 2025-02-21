"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BgChannelsWebClient = void 0;
const index_js_1 = __importDefault(require("./mock/index.js"));
const index_js_2 = __importDefault(require("./operations/index.js"));
class BgChannelsWebClient {
    config;
    listeners = [];
    constructor(config) {
        this.config = config;
    }
    /**
     * Subscribe to channel events.
     * @param listener - The listener to be added.
     */
    addListener(listener) {
        if (this.listeners.some((l) => l.id === listener.id)) {
            throw new Error(`Listener with id ${listener.id} already exists.`);
        }
        this.listeners.push(listener);
    }
    /**
     * Unsubscribes from channel events.
     * @param listener - The listener to be removed.
     */
    removeListener(id) {
        const index = this.listeners.findIndex((l) => l.id === id);
        if (index > -1) {
            this.listeners.splice(index, 1);
        }
    }
    /**
     * Creates a new channel.
     * @returns A promise that resolves to the result object.
     */
    async createChannel(channel) {
        const result = this.config.useMockData
            ? await index_js_1.default.createChannel(channel)
            : await index_js_2.default.createChannel(channel);
        if (!result.error) {
            this.listeners.forEach((listener) => {
                if (listener.onChannelCreated) {
                    listener.onChannelCreated(result);
                }
            });
        }
        return result;
    }
    /**
     * Creates a new channel message.
     * @returns A promise that resolves to the result object.
     */
    async createChannelMessage(channelMessage) {
        const result = this.config.useMockData
            ? await index_js_1.default.createChannelMessage(channelMessage)
            : await index_js_2.default.createChannelMessage(channelMessage);
        if (!result.error) {
            this.listeners.forEach((listener) => {
                if (listener.onChannelMessageCreated) {
                    listener.onChannelMessageCreated(result);
                }
            });
        }
        return result;
    }
    /**
     * Deletes an existing channel.
     * @returns A promise that resolves to the result object.
     */
    async deleteChannel(id) {
        const result = this.config.useMockData
            ? await index_js_1.default.deleteChannel(id)
            : await index_js_2.default.deleteChannel(id);
        if (!result.error) {
            this.listeners.forEach((listener) => {
                if (listener.onChannelDeleted) {
                    listener.onChannelDeleted(result);
                }
            });
        }
        return result;
    }
    /**
     * Deletes an existing channel message.
     * @returns A promise that resolves to the result object.
     */
    async deleteChannelMessage(id) {
        const result = this.config.useMockData
            ? await index_js_1.default.deleteChannelMessage(id)
            : await index_js_2.default.deleteChannelMessage(id);
        if (!result.error) {
            this.listeners.forEach((listener) => {
                if (listener.onChannelMessageDeleted) {
                    listener.onChannelMessageDeleted(result);
                }
            });
        }
        return result;
    }
    /**
     * Load a paginated list of channels.
     * @param filter - the filter.
     * @param skip - number of channels to skip for pagination.
     * @param limit - number of channels to return for pagination.
     * @returns A promise that resolves to a list of channels.
     */
    async findChannels(filter, skip, limit) {
        const result = this.config.useMockData
            ? await index_js_1.default.findChannels(filter, skip, limit)
            : await index_js_2.default.findChannels(filter, skip, limit);
        return result;
    }
    /**
     * Load a paginated list of messages for a channel.
     * @param filter - the filter.
     * @param skip - number of messages to skip for pagination.
     * @param limit - number of messages to return for pagination.
     * @returns A promise that resolves to a list of channel messages.
     */
    async findChannelMessages(filter, skip, limit) {
        const result = this.config.useMockData
            ? await index_js_1.default.findChannelMessages(filter, skip, limit)
            : await index_js_2.default.findChannelMessages(filter, skip, limit);
        return result;
    }
    /**
     * Updates an existing channel.
     * @returns A promise that resolves to the result object.
     */
    async updateChannel(channel) {
        const result = this.config.useMockData
            ? await index_js_1.default.updateChannel(channel)
            : await index_js_2.default.updateChannel(channel);
        if (!result.error) {
            this.listeners.forEach((listener) => {
                if (listener.onChannelUpdated) {
                    listener.onChannelUpdated(result);
                }
            });
        }
        return result;
    }
    /**
     * Updates an existing channel message.
     * @returns A promise that resolves to the result object.
     */
    async updateChannelMessage(channelMessage) {
        const result = this.config.useMockData
            ? await index_js_1.default.updateChannelMessage(channelMessage)
            : await index_js_2.default.updateChannelMessage(channelMessage);
        if (!result.error) {
            this.listeners.forEach((listener) => {
                if (listener.onChannelMessageUpdated) {
                    listener.onChannelMessageUpdated(result);
                }
            });
        }
        return result;
    }
}
exports.BgChannelsWebClient = BgChannelsWebClient;
