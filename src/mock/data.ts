import { Channel } from '../types/models/Channel.js';
import { ChannelMessage } from '../types/models/ChannelMessage.js';

const channels: Channel[] = [];
const messages = new Map<string, ChannelMessage[]>();

const data = {
  // channelInvitations: [] as ChannelInvitation[],
  addChannel: (channel: Channel): void => {
    messages.set(channel.id, channel.messages || []);
    delete channel.messages;
    channels.push(channel);
  },

  addChannelMessage: (message: ChannelMessage): void => {
    if (messages.has(message.channelId)) {
      const channelMessages = messages.get(message.channelId);
      if (channelMessages) {
        channelMessages.push(message);
        return;
      }
    }

    messages.set(message.channelId, [message]);
  },

  deleteChannel: (id: string): void => {
    const index = channels.findIndex(c => c.id === id);

    if (index < 0) {
      throw new Error('channel-not-found');
    }

    channels.splice(index, 1);
    messages.delete(id);
  },

  deleteChannelMessage: (id: string): void => {
    for (const channelMessages of messages.values()) {
      const messageIndex = channelMessages.findIndex(m => m.id === id);
      if (messageIndex > -1) {
        channelMessages.splice(messageIndex, 1);
        return;
      }
    }

    throw new Error('message-not-found');
  },

  findChannel: (id: string): Channel | null => {
    return channels.find(c => c.id === id) || null;
  },

  findMessage: (id: string): ChannelMessage | null => {
    for (const channelMessages of messages.values()) {
      const message = channelMessages.find(m => m.id === id);
      if (message) {
        return message;
      }
    }

    return null
  },

  replaceChannelMessage: (message: ChannelMessage): void => {
    for (const channelMessages of messages.values()) {
      const messageIndex = channelMessages.findIndex(m => m.id === message.id);
      if (messageIndex > -1) {
        channelMessages[messageIndex] = message;
        return;
      }
    }
  },

  updateChannel: (changes: Partial<Channel>): Channel => {
    const index = channels.findIndex(c => c.id === changes.id);
    if (index < 0) {
      throw new Error('channel-not-found');
    }

    const updatedChannel = Object.assign(channels[index], changes);
    channels[index] = updatedChannel;
    return updatedChannel;
  },

  updateChannelMessage: (changes: Partial<ChannelMessage>): ChannelMessage | null => {
    for (const channelMessages of messages.values()) {
      const messageIndex = channelMessages.findIndex(m => m.id === changes.id);
      if (messageIndex > -1) {
        const updatedMessage = Object.assign(channelMessages[messageIndex], changes)
        channelMessages[messageIndex] = updatedMessage;

        return updatedMessage;
      }
    }

    return null;
  },
}

export default data
