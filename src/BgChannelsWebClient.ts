import { ChannelEventListener } from './types/ChannelEventListener.js';
import { ChannelMessage } from './types/models/ChannelMessage';

export class BgChannelsWebClient {
  private listeners: ChannelEventListener[] = []

  /**
   * Subscribe to channel events.
   * @param listener - The listener to be added to the mock data provider.
   */
  public addEventListener(listener: ChannelEventListener): void {
    this.listeners.push(listener);
  }

  /**
   * Creates a new channel.
   * @returns A promise that resolves to the created channel.
   */
  public async createChannelMessage(channelMessage: ChannelMessage): Promise<ChannelMessage> {
    return channelMessage;
  }

  /**
   * Updates an existing channel.
   * @returns A promise that resolves to the updated channel.
   */
  public async updateChannelMessage(channelMessage: ChannelMessage): Promise<ChannelMessage> {
    return channelMessage;
  }

  /**
   * Deletes an existing channel.
   * @returns A promise that resolves to the deleted channel.
   */
  public async deleteChannelMessage(id: string): Promise<void> {

  }

  /**
   * Load a paginated list of messages for a channel.
   * @param channelId - The ID of the channel (we can ignore this for now).
   * @param skip - number of messages to skip for pagination.
   * @param limit - number of messages to return for pagination.
   * @returns A promise that resolves to a list of channel messages.
   */
  public async findChannelMessages(channelId: string, skip: number, limit: number): Promise<ChannelMessage[]> {
    return [];
  }
}
