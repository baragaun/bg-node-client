import { BgChannelsWebClientConfig } from './types/BgChannelsWebClientConfig.js';
import { Channel } from './types/models/Channel.js';
import { ChannelFilter } from './types/ChannelFilter.js';
import { ChannelMessage } from './types/models/ChannelMessage.js';
import { ChannelMessageFilter } from './types/ChannelMessageFilter.js';
import { ChannelsListener } from './types/ChannelsListener.js';
import { DbType } from './types/enums.js';
import { MutationResult } from './types/MutationResult.js';
import { QueryResult } from './types/QueryResult.js';
import { User } from './types/models/User.js';
import createChannelFunc from './operations/createChannel.js';
import createChannelMessageFunc from './operations/createChannelMessage.js';
import db from './db/db.js';
import deleteChannelFunc from './operations/deleteChannel.js';
import deleteChannelMessageFunc from './operations/deleteChannelMessage.js';
import factories from './factories/factories.js';
import findChannelMessagesFunc from './operations/findChannelMessages.js';
import findChannelsFunc from './operations/findChannels.js';
import updateChannelFunc from './operations/updateChannel.js';
import updateChannelMessageFunc from './operations/updateChannelMessage.js';

export class BgChannelsWebClient {
  private config: BgChannelsWebClientConfig;
  private listeners: ChannelsListener[] = [];

  public constructor(config: BgChannelsWebClientConfig) {
    this.config = config;

    if (!this.config.dbType) {
      this.config.dbType = DbType.mem;
    }

    db.init(this.config)
      .catch((error) => {
        console.error('Error initializing database:', error);
      });
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
  ): Promise<MutationResult<Channel>> {
    const result = await createChannelFunc(channel);

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

  /**
   * Creates a new channel message.
   * @returns A promise that resolves to the result object.
   */
  public async createChannelMessage(
    channelMessage: Partial<ChannelMessage>,
  ): Promise<MutationResult<ChannelMessage>> {
    const result = await createChannelMessageFunc(channelMessage);

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

  public createMockChannel(
    attributes: Partial<Channel>,
    userCount: number,
    messageCount: number,
    users?: User[],
    messages?: ChannelMessage[],
  ): Channel {
    return factories.channel(
      attributes,
      userCount,
      messageCount,
      users,
      messages,
    );
  }

  public createMockUser(
    attributes: Partial<User>,
  ): User {
    return factories.user(
      attributes,
    );
  }

  /**
   * Deletes an existing channel.
   * @returns A promise that resolves to the result object.
   */
  public async deleteChannel(
    id: string,
  ): Promise<MutationResult<Channel>> {
    const result = await deleteChannelFunc(id);

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
  ): Promise<MutationResult<ChannelMessage>> {
    const result = await deleteChannelMessageFunc(id);

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
  ): Promise<QueryResult<Channel>> {
    const result = await findChannelsFunc(filter, skip, limit);

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
  ): Promise<QueryResult<ChannelMessage>> {
    const result = await findChannelMessagesFunc(filter, skip, limit);

    return result;
  }

  /**
   * Updates an existing channel.
   * @returns A promise that resolves to the result object.
   */
  public async updateChannel(
    channel: Partial<Channel>,
  ): Promise<MutationResult<Channel>> {
    const result = await updateChannelFunc(channel);

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
  ): Promise<MutationResult<ChannelMessage>> {
    const result = await updateChannelMessageFunc(channelMessage);

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
