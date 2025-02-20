import { ChannelEventListener } from './types/ChannelEventListener.js';
import { ChannelMessage } from './types/models/ChannelMessage';
export declare class BgChannelsWebClient {
    private listeners;
    /**
     * Subscribe to channel events.
     * @param listener - The listener to be added to the mock data provider.
     */
    addEventListener(listener: ChannelEventListener): void;
    /**
     * Creates a new channel.
     * @returns A promise that resolves to the created channel.
     */
    createChannelMessage(channelMessage: ChannelMessage): Promise<ChannelMessage>;
    /**
     * Updates an existing channel.
     * @returns A promise that resolves to the updated channel.
     */
    updateChannelMessage(channelMessage: ChannelMessage): Promise<ChannelMessage>;
    /**
     * Deletes an existing channel.
     * @returns A promise that resolves to the deleted channel.
     */
    deleteChannelMessage(id: string): Promise<void>;
    /**
     * Load a paginated list of messages for a channel.
     * @param channelId - The ID of the channel (we can ignore this for now).
     * @param skip - number of messages to skip for pagination.
     * @param limit - number of messages to return for pagination.
     * @returns A promise that resolves to a list of channel messages.
     */
    findChannelMessages(channelId: string, skip: number, limit: number): Promise<ChannelMessage[]>;
}
