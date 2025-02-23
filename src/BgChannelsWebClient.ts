import { BgChannelsWebClientConfig } from './types/BgChannelsWebClientConfig.js';
import { Channel } from './types/models/Channel.js';
import { ChannelInvitation } from './types/models/ChannelInvitation.js';
import { ChannelInvitationListFilter } from './types/models/ChannelInvitationListFilter.js';
import { ChannelListFilter } from './types/models/ChannelListFilter.js';
import { ChannelMessage } from './types/models/ChannelMessage.js';
import { ChannelMessageListFilter } from './types/models/ChannelMessageListFilter.js';
import { ChannelParticipant } from './types/models/ChannelParticipant.js';
import { ChannelParticipantListFilter } from './types/models/ChannelParticipantListFilter.js';
import { ChannelsListener } from './types/ChannelsListener.js';
import { DbType } from './types/enums.js';
import { MutationResult } from './types/MutationResult.js';
import { QueryResult } from './types/QueryResult.js';
import { User } from './types/models/User.js';
import createChannelFunc from './operations/createChannel.js';
import createChannelMessageFunc from './operations/createChannelMessage.js';
import db from './db/db.js';
import deleteChannelFunc from './operations/deleteChannel.js';
import deleteChannelInvitationFunc from './operations/deleteChannelInvitation.js';
import deleteChannelMessageFunc from './operations/deleteChannelMessage.js';
import factories from './factories/factories.js';
import findChannelInvitationsFunc from './operations/findChannelInvitations.js';
import findChannelMessagesFunc from './operations/findChannelMessages.js';
import findChannelParticipantsFunc from './operations/findChannelParticipants.js';
import findChannelsFunc from './operations/findChannels.js';
import updateChannelFunc from './operations/updateChannel.js';
import updateChannelInvitationFunc from './operations/updateChannelInvitation.js';
import updateChannelMessageFunc from './operations/updateChannelMessage.js';
import updateChannelParticipantFunc from './operations/updateChannelParticipant.js';

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
   * Deletes an existing channel invitation.
   * @returns A promise that resolves to the result object.
   */
  public async deleteChannelInvitation(
    id: string,
  ): Promise<MutationResult<ChannelInvitation>> {
    const result = await deleteChannelInvitationFunc(id);

    if (!result.error) {
      this.listeners.forEach(
        (listener) => {
          if (listener.onChannelInvitationDeleted) {
            listener.onChannelInvitationDeleted(result)
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
   * @param match
   * @param skip - number of channels to skip for pagination.
   * @param limit - number of channels to return for pagination.
   * @returns A promise that resolves to a list of channels.
   */
  public async findChannels(
    filter: ChannelListFilter,
    match: Partial<Channel>,
    skip: number,
    limit: number,
  ): Promise<QueryResult<Channel>> {
    const result = await findChannelsFunc(
      filter,
      match,
      skip,
      limit,
    );

    return result;
  }

  /**
   * Load a paginated list of invitations for a channel.
   * @param filter - the filter.
   * @param match
   * @param skip - number of invitations to skip for pagination.
   * @param limit - number of invitations to return for pagination.
   * @returns A promise that resolves to a list of channel invitations.
   */
  public async findChannelInvitations(
    filter: ChannelInvitationListFilter,
    match: Partial<ChannelInvitation>,
    skip: number,
    limit: number,
  ): Promise<QueryResult<ChannelInvitation>> {
    const result = await findChannelInvitationsFunc(
      filter,
      match,
      skip,
      limit,
    );

    return result;
  }

  /**
   * Load a paginated list of messages for a channel.
   * @param filter - the filter.
   * @param match
   * @param skip - number of messages to skip for pagination.
   * @param limit - number of messages to return for pagination.
   * @returns A promise that resolves to a list of channel messages.
   */
  public async findChannelMessages(
    filter: ChannelMessageListFilter,
    match: Partial<ChannelMessage>,
    skip: number,
    limit: number,
  ): Promise<QueryResult<ChannelMessage>> {
    const result = await findChannelMessagesFunc(
      filter,
      match,
      skip,
      limit,
    );

    return result;
  }

  /**
   * Load a paginated list of participants for a channel.
   * @param filter - the filter.
   * @param match
   * @param skip - number of participants to skip for pagination.
   * @param limit - number of participants to return for pagination.
   * @returns A promise that resolves to a list of channel participants.
   */
  public async findChannelParticipants(
    filter: ChannelParticipantListFilter,
    match: Partial<ChannelParticipant>,
    skip: number,
    limit: number,
  ): Promise<QueryResult<ChannelParticipant>> {
    const result = await findChannelParticipantsFunc(
      filter,
      match,
      skip,
      limit,
    );

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
  public async updateChannelInvitation(
    channelInvitation: Partial<ChannelInvitation>,
  ): Promise<MutationResult<ChannelInvitation>> {
    const result = await updateChannelInvitationFunc(channelInvitation);

    if (!result.error) {
      this.listeners.forEach(
        (listener) => {
          if (listener.onChannelInvitationUpdated) {
            listener.onChannelInvitationUpdated(result)
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

  /**
   * Updates an existing channel participant.
   * @returns A promise that resolves to the result object.
   */
  public async updateChannelParticipant(
    channelParticipant: Partial<ChannelParticipant>,
  ): Promise<MutationResult<ChannelParticipant>> {
    const result = await updateChannelParticipantFunc(channelParticipant);

    if (!result.error) {
      this.listeners.forEach(
        (listener) => {
          if (listener.onChannelParticipantUpdated) {
            listener.onChannelParticipantUpdated(result)
          }
        },
      );
    }

    return result;
  }
}
