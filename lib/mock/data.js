"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const channels = [];
const messages = new Map();
const data = {
    // channelInvitations: [] as ChannelInvitation[],
    addChannel: (channel) => {
        messages.set(channel.id, channel.messages || []);
        delete channel.messages;
        channels.push(channel);
    },
    addChannelMessage: (message) => {
        if (messages.has(message.channelId)) {
            const channelMessages = messages.get(message.channelId);
            if (channelMessages) {
                channelMessages.push(message);
                return;
            }
        }
        messages.set(message.channelId, [message]);
    },
    deleteChannel: (id) => {
        const index = channels.findIndex(c => c.id === id);
        if (index < 0) {
            throw new Error('channel-not-found');
        }
        channels.splice(index, 1);
        messages.delete(id);
    },
    deleteChannelMessage: (id) => {
        for (const channelMessages of messages.values()) {
            const messageIndex = channelMessages.findIndex(m => m.id === id);
            if (messageIndex > -1) {
                channelMessages.splice(messageIndex, 1);
                return;
            }
        }
        throw new Error('message-not-found');
    },
    findChannel: (id) => {
        return channels.find(c => c.id === id) || null;
    },
    findMessage: (id) => {
        for (const channelMessages of messages.values()) {
            const message = channelMessages.find(m => m.id === id);
            if (message) {
                return message;
            }
        }
        return null;
    }
};
exports.default = data;
