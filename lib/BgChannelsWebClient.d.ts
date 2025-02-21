import { BgChannelsWebClientConfig } from './types/BgChannelsWebClientConfig.js';
import { Channel } from './types/models/Channel.js';
import { ChannelFilter } from './types/ChannelFilter.js';
import { ChannelMessage } from './types/models/ChannelMessage.js';
import { ChannelMessageFilter } from './types/ChannelMessageFilter.js';
import { ChannelsListener } from './types/ChannelsListener.js';
import { MutateChannelResult } from './types/MutateChannelResult.js';
import { User } from './types/models/User.js';
export declare class BgChannelsWebClient {
    private config;
    private listeners;
    constructor(config: BgChannelsWebClientConfig);
    /**
     * Subscribe to channel events.
     * @param listener - The listener to be added.
     */
    addListener(listener: ChannelsListener): void;
    /**
     * Unsubscribes from channel events.
     * @param listener - The listener to be removed.
     */
    removeListener(id: string): void;
    /**
     * Creates a new channel.
     * @returns A promise that resolves to the result object.
     */
    createChannel(channel: Partial<Channel>): Promise<MutateChannelResult<Channel>>;
    generateMockChannel(attributes: Partial<Channel>, userCount: number, messageCount: number, users?: User[], messages?: ChannelMessage[]): Channel;
    generateMockUser(attributes: Partial<User>): User;
    /**
     * Creates a new channel message.
     * @returns A promise that resolves to the result object.
     */
    createChannelMessage(channelMessage: Partial<ChannelMessage>): Promise<MutateChannelResult<ChannelMessage>>;
    /**
     * Deletes an existing channel.
     * @returns A promise that resolves to the result object.
     */
    deleteChannel(id: string): Promise<MutateChannelResult<Channel>>;
    /**
     * Deletes an existing channel message.
     * @returns A promise that resolves to the result object.
     */
    deleteChannelMessage(id: string): Promise<MutateChannelResult<ChannelMessage>>;
    /**
     * Load a paginated list of channels.
     * @param filter - the filter.
     * @param skip - number of channels to skip for pagination.
     * @param limit - number of channels to return for pagination.
     * @returns A promise that resolves to a list of channels.
     */
    findChannels(filter: ChannelFilter, skip: number, limit: number): Promise<Channel[]>;
    /**
     * Load a paginated list of messages for a channel.
     * @param filter - the filter.
     * @param skip - number of messages to skip for pagination.
     * @param limit - number of messages to return for pagination.
     * @returns A promise that resolves to a list of channel messages.
     */
    findChannelMessages(filter: ChannelMessageFilter, skip: number, limit: number): Promise<ChannelMessage[]>;
    /**
     * Updates an existing channel.
     * @returns A promise that resolves to the result object.
     */
    updateChannel(channel: Partial<Channel>): Promise<MutateChannelResult<Channel>>;
    /**
     * Updates an existing channel message.
     * @returns A promise that resolves to the result object.
     */
    updateChannelMessage(channelMessage: Partial<ChannelMessage>): Promise<MutateChannelResult<ChannelMessage>>;
}
