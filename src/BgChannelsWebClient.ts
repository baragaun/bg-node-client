import { BgChannelsWebClientConfig } from './types/BgChannelsWebClientConfig.js';
import { Channel } from './types/models/Channel.js';
import { ChannelFilter } from './types/ChannelFilter.js';
import { ChannelMessage } from './types/models/ChannelMessage.js';
import { ChannelMessageFilter } from './types/ChannelMessageFilter.js';
import { ChannelsListener } from './types/ChannelsListener.js';
import { MutateChannelResult } from './types/MutateChannelResult.js';
import { User } from './types/models/User.js';
import mockOperations from './mock/index.js';
import operations from './operations/index.js';

export class BgChannelsWebClient {
  private config: BgChannelsWebClientConfig;
  private listeners: ChannelsListener[] = [];

  public constructor(config: BgChannelsWebClientConfig) {
    this.config = config;
  }

  /**
   * Subscribe to channel events.
   * @param listener - The listener to be added.
   */
  public addListener(listener: ChannelsListener): void {
    if (this.listeners.some((l) => l.id === listener.id)) {
      throw new Error(`Listener with id ${listener.id} already exists.`);
    }

    this.listeners.push(listener);
  }

  /**
   * Unsubscribes from channel events.
   * @param listener - The listener to be removed.
   */
  public removeListener(id: string): void {
    const index = this.listeners.findIndex((l) => l.id === id);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }

  /**
   * Creates a new channel.
   * @returns A promise that resolves to the result object.
   */
  public async createChannel(
    channel: Partial<Channel>,
  ): Promise<MutateChannelResult<Channel>> {
    const result = this.config.useMockData
      ? await mockOperations.createChannel(channel)
      : await operations.createChannel(channel);

    if (!result.error) {
      this.listeners.forEach(
        (listener) => {
          if (listener.onChannelCreated) {
            listener.onChannelCreated(result)
          }
        },
      );
    }

    return result;
  }

  public generateMockChannel(
    attributes: Partial<Channel>,
    userCount: number,
    messageCount: number,
    users?: User[],
    messages?: ChannelMessage[],
  ): Channel {
    return mockOperations.factories.channel(
      attributes,
      userCount,
      messageCount,
      users,
      messages,
    );
  }

  public generateMockUser(
    attributes: Partial<User>,
  ): User {
    return mockOperations.factories.user(
      attributes,
    );
  }

  /**
   * Creates a new channel message.
   * @returns A promise that resolves to the result object.
   */
  public async createChannelMessage(
    channelMessage: Partial<ChannelMessage>,
  ): Promise<MutateChannelResult<ChannelMessage>> {
    const result = this.config.useMockData
      ? await mockOperations.createChannelMessage(channelMessage)
      : await operations.createChannelMessage(channelMessage);

    if (!result.error) {
      this.listeners.forEach(
        (listener) => {
          if (listener.onChannelMessageCreated) {
            listener.onChannelMessageCreated(result)
          }
        },
      );
    }

    return result;
  }

  /**
   * Deletes an existing channel.
   * @returns A promise that resolves to the result object.
   */
  public async deleteChannel(
    id: string,
  ): Promise<MutateChannelResult<Channel>> {
    const result = this.config.useMockData
      ? await mockOperations.deleteChannel(id)
      : await operations.deleteChannel(id);

    if (!result.error) {
      this.listeners.forEach(
        (listener) => {
          if (listener.onChannelDeleted) {
            listener.onChannelDeleted(result)
          }
        },
      );
    }

    return result;
  }

  /**
   * Deletes an existing channel message.
   * @returns A promise that resolves to the result object.
   */
  public async deleteChannelMessage(
    id: string,
  ): Promise<MutateChannelResult<ChannelMessage>> {
    const result = this.config.useMockData
      ? await mockOperations.deleteChannelMessage(id)
      : await operations.deleteChannelMessage(id);

    if (!result.error) {
      this.listeners.forEach(
        (listener) => {
          if (listener.onChannelMessageDeleted) {
            listener.onChannelMessageDeleted(result)
          }
        },
      );
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
  public async findChannels(
    filter: ChannelFilter,
    skip: number,
    limit: number,
  ): Promise<Channel[]> {
    const result = this.config.useMockData
      ? await mockOperations.findChannels(filter, skip, limit)
      : await operations.findChannels(filter, skip, limit);

    return result;
  }

  /**
   * Load a paginated list of messages for a channel.
   * @param filter - the filter.
   * @param skip - number of messages to skip for pagination.
   * @param limit - number of messages to return for pagination.
   * @returns A promise that resolves to a list of channel messages.
   */
  public async findChannelMessages(
    filter: ChannelMessageFilter,
    skip: number,
    limit: number,
  ): Promise<ChannelMessage[]> {
    const result = this.config.useMockData
      ? await mockOperations.findChannelMessages(filter, skip, limit)
      : await operations.findChannelMessages(filter, skip, limit);

    return result;
  }

  /**
   * Updates an existing channel.
   * @returns A promise that resolves to the result object.
   */
  public async updateChannel(
    channel: Partial<Channel>,
  ): Promise<MutateChannelResult<Channel>> {
    const result = this.config.useMockData
      ? await mockOperations.updateChannel(channel)
      : await operations.updateChannel(channel);

    if (!result.error) {
      this.listeners.forEach(
        (listener) => {
          if (listener.onChannelUpdated) {
            listener.onChannelUpdated(result)
          }
        },
      );
    }

    return result;
  }

  /**
   * Updates an existing channel message.
   * @returns A promise that resolves to the result object.
   */
  public async updateChannelMessage(
    channelMessage: Partial<ChannelMessage>,
  ): Promise<MutateChannelResult<ChannelMessage>> {
    const result = this.config.useMockData
      ? await mockOperations.updateChannelMessage(channelMessage)
      : await operations.updateChannelMessage(channelMessage);

    if (!result.error) {
      this.listeners.forEach(
        (listener) => {
          if (listener.onChannelMessageUpdated) {
            listener.onChannelMessageUpdated(result)
          }
        },
      );
    }

    return result;
  }
}
