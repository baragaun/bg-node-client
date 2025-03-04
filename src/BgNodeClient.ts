import { BgDataListener } from './types/BgDataListener.js';
import { BgNodeClientConfig } from './types/BgNodeClientConfig.js';
import { Channel } from './types/models/Channel.js';
import { ChannelInvitation } from './types/models/ChannelInvitation.js';
import { ChannelInvitationListFilter } from './types/models/ChannelInvitationListFilter.js';
import { ChannelListFilter } from './types/models/ChannelListFilter.js';
import { ChannelMessage } from './types/models/ChannelMessage.js';
import { ChannelMessageListFilter } from './types/models/ChannelMessageListFilter.js';
import { ChannelParticipant } from './types/models/ChannelParticipant.js';
import { ChannelParticipantListFilter } from './types/models/ChannelParticipantListFilter.js';
import { DbType, ModelType } from './types/enums.js';
import { Model } from './types/Model.js';
import { MyUser } from './types/models/MyUser.js';
import { MutationResult } from './types/MutationResult.js';
import { QueryResult } from './types/QueryResult.js';
import { User } from './types/models/User.js';
import createChannelFunc from './operations/createChannel.js';
import createChannelMessageFunc from './operations/createChannelMessage.js';
import db from './db/db.js';
import deleteChannelFunc from './operations/deleteChannel.js';
import deleteChannelInvitationFunc from './operations/deleteChannelInvitation.js';
import deleteChannelMessageFunc from './operations/deleteChannelMessage.js';
import factories from './test/factories/factories.js';
import findByIdFunc from './operations/findById.js';
import findChannelInvitationsFunc from './operations/findChannelInvitations.js';
import findChannelMessagesFunc from './operations/findChannelMessages.js';
import findChannelParticipantsFunc from './operations/findChannelParticipants.js';
import findChannelsFunc from './operations/findChannels.js';
import findOneFunc from './operations/findOne.js';
import insertOneFunc from './operations/insertOne.js';
import mockFactories from './mockFactories/mockFactories.js';
import signUpUserFunc from './operations/signUpUser.js';
import updateChannelFunc from './operations/updateChannel.js';
import updateChannelInvitationFunc from './operations/updateChannelInvitation.js';
import updateChannelMessageFunc from './operations/updateChannelMessage.js';
import updateChannelParticipantFunc from './operations/updateChannelParticipant.js';
import findMyUserQuery from './graphql/queries/findMyUser.js';
import signInUserFunc from './operations/signInUser.js';
import { UserIdentType } from './graphql/gql/graphql.js';

export class BgNodeClient {
  private _config: BgNodeClientConfig;
  private _listeners: BgDataListener[] = [];
  private _myUserId: string | null | undefined;
  // @ts-ignore
  private _authToken: string | undefined;

  public constructor(myUserId: string | null | undefined, config: BgNodeClientConfig) {
    this._config = config;

    if (!this._config.dbType) {
      this._config.dbType = DbType.mem;
    }

    if (typeof window !== 'undefined' && window.localStorage && !myUserId) {
      myUserId = window.localStorage.getItem('myUserId');
    }

    if (myUserId) {
      this._myUserId = myUserId;
      if (typeof window !== 'undefined' && window.localStorage) {
        this._authToken = window.localStorage.getItem('authToken');
      }

      this.init(myUserId).then(
        () => {
          console.log('BgNodeClient: initialized.');
        },
        (error) => {
          console.error('BgNodeClient.init: error.', error);
        },
      );
    }
  }

  public async init(myUserId: string | null | undefined): Promise<void> {
    if (myUserId) {
      this._myUserId = myUserId;
    }
    await db.init(this._myUserId, this._config);
  }

  public factories = factories;
  public libSignalStores = db.libSignalStores;

  /**
   * Subscribe to channel events.
   * @param listener - The listener to be added.
   */
  public addListener(listener: BgDataListener): void {
    if (this._listeners.some((l) => l.id === listener.id)) {
      throw new Error(`Listener with id ${listener.id} already exists.`);
    }

    this._listeners.push(listener);
  }

  /**
   * Unsubscribes from channel events.
   * @param listener - The listener to be removed.
   */
  public removeListener(id: string): void {
    const index = this._listeners.findIndex((l) => l.id === id);
    if (index > -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Creates a new channel.
   * @returns A promise that resolves to the result object.
   */
  public async createChannel(channel: Partial<Channel>): Promise<MutationResult<Channel>> {
    const result = await createChannelFunc(channel);

    if (!result.error) {
      this._listeners.forEach((listener) => {
        if (listener.onChannelCreated) {
          listener.onChannelCreated(result);
        }
      });
    }

    return result;
  }

  /**
   * Creates a new channel message.
   * @returns A promise that resolves to the result object.
   */
  public async createChannelMessage(channelMessage: Partial<ChannelMessage>): Promise<MutationResult<ChannelMessage>> {
    const result = await createChannelMessageFunc(channelMessage);

    if (!result.error) {
      this._listeners.forEach((listener) => {
        if (listener.onChannelMessageCreated) {
          listener.onChannelMessageCreated(result);
        }
      });
    }

    return result;
  }

  public createMockChannel(
    attributes: Partial<Channel>,
    userCount: number,
    messageCount: number,
    users?: User[],
    messages?: ChannelMessage[],
  ): { channel: Channel; messages: ChannelMessage[]; users: User[] } {
    return mockFactories.channel(attributes, userCount, messageCount, users, messages);
  }

  public createMockUser(attributes: Partial<User>): User {
    return mockFactories.user(attributes);
  }

  /**
   * Deletes an existing channel.
   * @returns A promise that resolves to the result object.
   */
  public async deleteChannel(id: string): Promise<MutationResult<Channel>> {
    const result = await deleteChannelFunc(id);

    if (!result.error) {
      this._listeners.forEach((listener) => {
        if (listener.onChannelDeleted) {
          listener.onChannelDeleted(result);
        }
      });
    }

    return result;
  }

  /**
   * Deletes an existing channel invitation.
   * @returns A promise that resolves to the result object.
   */
  public async deleteChannelInvitation(id: string): Promise<MutationResult<ChannelInvitation>> {
    const result = await deleteChannelInvitationFunc(id);

    if (!result.error) {
      this._listeners.forEach((listener) => {
        if (listener.onChannelInvitationDeleted) {
          listener.onChannelInvitationDeleted(result);
        }
      });
    }

    return result;
  }

  /**
   * Deletes an existing channel message.
   * @returns A promise that resolves to the result object.
   */
  public async deleteChannelMessage(id: string): Promise<MutationResult<ChannelMessage>> {
    const result = await deleteChannelMessageFunc(id);

    if (!result.error) {
      this._listeners.forEach((listener) => {
        if (listener.onChannelMessageDeleted) {
          listener.onChannelMessageDeleted(result);
        }
      });
    }

    return result;
  }

  /**
   * Finds a channel by its ID.
   * @param id - The ID of the channel.
   * @param modelType - The model type.
   * @returns A promise that resolves to the channel object, or null if not found.
   */
  public async findById<T extends Model>(id: string, modelType: ModelType): Promise<T | null> {
    const result = await findByIdFunc<T>(id, modelType);

    if (result.error) {
      return null;
    }

    return result.object;
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
    return findChannelsFunc(filter, match, skip, limit);
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
    const result = await findChannelInvitationsFunc(filter, match, skip, limit);

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
    const result = await findChannelMessagesFunc(filter, match, skip, limit);

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
    const result = await findChannelParticipantsFunc(filter, match, skip, limit);

    return result;
  }

  /**
   * Finds my User.
   * @returns A promise that resolves to my user object, or null if not found.
   */
  public async findMyUser(): Promise<MyUser | null> {
    const useCached = false;

    if (useCached) {
      const result = await findByIdFunc<MyUser>(this._myUserId, ModelType.MyUser);

      if (result.error) {
        return null;
      }

      return result.object;
    } else {
      const myUser = await findMyUserQuery();
      if (myUser) {
        await insertOneFunc(myUser);
      }

      return myUser;
    }
  }

  /**
   * Finds a channel by its ID.
   * @param match
   * @param modelType - The model type.
   * @returns A promise that resolves to the channel object, or null if not found.
   */
  public async findOne<T extends Model>(match: Partial<T>, modelType: ModelType): Promise<T | null> {
    const result = await findOneFunc<T>(match, modelType);

    if (result.error) {
      return null;
    }

    return result.object;
  }

  /**
   * Finds a channel by its ID.
   * @param object
   * @returns A promise that resolves to the channel object, or null if not found.
   */
  public async insertOne<T extends Model>(object: T): Promise<T | null> {
    const result = await insertOneFunc<T>(object);

    if (result.error) {
      return null;
    }

    return result.object;
  }

  public async signInUser(ident: string, identType: UserIdentType, password: string): Promise<MutationResult<MyUser>> {
    const result = await signInUserFunc(ident, identType, password);

    if (!result.error) {
      // Success:
      this._myUserId = result.object.userId;
      this._authToken = result.object.authToken;

      if (result.object.userId) {
        const myUser = new MyUser({
          id: result.object.userId,
          email: result.object.email,
        });

        return insertOneFunc<MyUser>(myUser);
      }
    }

    return result as unknown as MutationResult<MyUser>;
  }

  public async signUpUser(userHandle: string, email?: string, password?: string): Promise<MutationResult<MyUser>> {
    const result = await signUpUserFunc(userHandle, email, password);

    if (!result.error) {
      // Success:
      this._myUserId = result.object.userId;
      this._authToken = result.object.authToken;

      if (result.object.userId) {
        const myUser = new MyUser({
          userHandle,
          email,
          passwordHash: password, // todo;
        });

        return insertOneFunc<MyUser>(myUser);
      }
    }

    return result as unknown as MutationResult<MyUser>;
  }

  /**
   * Updates an existing channel.
   * @returns A promise that resolves to the result object.
   */
  public async updateChannel(channel: Partial<Channel>): Promise<MutationResult<Channel>> {
    const result = await updateChannelFunc(channel);

    if (!result.error) {
      this._listeners.forEach((listener) => {
        if (listener.onChannelUpdated) {
          listener.onChannelUpdated(result);
        }
      });
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
      this._listeners.forEach((listener) => {
        if (listener.onChannelInvitationUpdated) {
          listener.onChannelInvitationUpdated(result);
        }
      });
    }

    return result;
  }

  /**
   * Updates an existing channel message.
   * @returns A promise that resolves to the result object.
   */
  public async updateChannelMessage(channelMessage: Partial<ChannelMessage>): Promise<MutationResult<ChannelMessage>> {
    const result = await updateChannelMessageFunc(channelMessage);

    if (!result.error) {
      this._listeners.forEach((listener) => {
        if (listener.onChannelMessageUpdated) {
          listener.onChannelMessageUpdated(result);
        }
      });
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
      this._listeners.forEach((listener) => {
        if (listener.onChannelParticipantUpdated) {
          listener.onChannelParticipantUpdated(result);
        }
      });
    }

    return result;
  }
}
