"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const channels = [];
const data = {
    // channelInvitations: [] as ChannelInvitation[],
    addChannel: (channel) => {
        channels.push(channel);
    },
    addChannelMessage: (message) => {
        const channel = channels.find(c => c.id === message.channelId);
        if (!channel) {
            throw new Error('Channel not found');
        }
        if (Array.isArray(channel.messages)) {
            channel.messages.push(message);
        }
        else {
            channel.messages = [message];
        }
    },
    deleteChannel: (id) => {
        const index = channels.findIndex(c => c.id === id);
        if (index < 0) {
            throw new Error('channel-not-found');
        }
        channels.splice(index, 1);
    },
    deleteChannelMessage: (id) => {
        for (let i = 0; i < channels.length; i++) {
            const channel = channels[i];
            if (Array.isArray(channel.messages)) {
                const messageIndex = channel.messages.findIndex(m => m.id === id);
                if (messageIndex > -1) {
                    channel.messages.splice(messageIndex, 1);
                    return;
                }
            }
        }
        throw new Error('message-not-found');
    },
    findChannel: (id) => {
        return channels.find(c => c.id === id) || null;
    },
    findMessage: (id) => {
        for (let i = 0; i < channels.length; i++) {
            const channel = channels[i];
            if (Array.isArray(channel.messages)) {
                const message = channel.messages.find(m => m.id === id);
                if (message) {
                    return message;
                }
            }
        }
        return null;
    }
};
exports.default = data;
