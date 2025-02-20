"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BgChannelsWebClient = void 0;
class BgChannelsWebClient {
    listeners = [];
    /**
     * Subscribe to channel events.
     * @param listener - The listener to be added to the mock data provider.
     */
    addEventListener(listener) {
        this.listeners.push(listener);
    }
    /**
     * Creates a new channel.
     * @returns A promise that resolves to the created channel.
     */
    async createChannelMessage(channelMessage) {
        return channelMessage;
    }
    /**
     * Updates an existing channel.
     * @returns A promise that resolves to the updated channel.
     */
    async updateChannelMessage(channelMessage) {
        return channelMessage;
    }
    /**
     * Deletes an existing channel.
     * @returns A promise that resolves to the deleted channel.
     */
    async deleteChannelMessage(id) {
    }
    /**
     * Load a paginated list of messages for a channel.
     * @param channelId - The ID of the channel (we can ignore this for now).
     * @param skip - number of messages to skip for pagination.
     * @param limit - number of messages to return for pagination.
     * @returns A promise that resolves to a list of channel messages.
     */
    async findChannelMessages(channelId, skip, limit) {
        return [];
    }
}
exports.BgChannelsWebClient = BgChannelsWebClient;
