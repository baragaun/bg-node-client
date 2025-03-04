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
import { ModelType } from './types/enums.js';
import { Model } from './types/Model.js';
import { MyUser } from './types/models/MyUser.js';
import { MutationResult } from './types/MutationResult.js';
import { QueryResult } from './types/QueryResult.js';
import { User } from './types/models/User.js';
import { UserIdentType } from './graphql/gql/graphql.js';
export declare class BgNodeClient {
    private _config;
    private _listeners;
    private _myUserId;
    private _authToken;
    constructor(myUserId: string | null | undefined, config: BgNodeClientConfig);
    init(myUserId: string | null | undefined): Promise<void>;
    factories: {
        channel: import("./test/factories/definitions.js").ChannelFactory;
        channelInvitation: import("./test/factories/definitions.js").ChannelInvitationFactory;
        channelMessage: import("./test/factories/definitions.js").ChannelMessageFactory;
        channelParticipant: import("./test/factories/definitions.js").ChannelParticipantFactory;
        user: import("./test/factories/definitions.js").UserFactory;
        userInbox: import("./test/factories/definitions.js").UserInboxFactory;
    };
    libSignalStores: () => import("./db/rxdb/libSignalStores/LibSignalStores.js").LibSignalStores;
    /**
     * Subscribe to channel events.
     * @param listener - The listener to be added.
     */
    addListener(listener: BgDataListener): void;
    /**
     * Unsubscribes from channel events.
     * @param listener - The listener to be removed.
     */
    removeListener(id: string): void;
    /**
     * Creates a new channel.
     * @returns A promise that resolves to the result object.
     */
    createChannel(channel: Partial<Channel>): Promise<MutationResult<Channel>>;
    /**
     * Creates a new channel message.
     * @returns A promise that resolves to the result object.
     */
    createChannelMessage(channelMessage: Partial<ChannelMessage>): Promise<MutationResult<ChannelMessage>>;
    createMockChannel(attributes: Partial<Channel>, userCount: number, messageCount: number, users?: User[], messages?: ChannelMessage[]): {
        channel: Channel;
        messages: ChannelMessage[];
        users: User[];
    };
    createMockUser(attributes: Partial<User>): User;
    /**
     * Deletes an existing channel.
     * @returns A promise that resolves to the result object.
     */
    deleteChannel(id: string): Promise<MutationResult<Channel>>;
    /**
     * Deletes an existing channel invitation.
     * @returns A promise that resolves to the result object.
     */
    deleteChannelInvitation(id: string): Promise<MutationResult<ChannelInvitation>>;
    /**
     * Deletes an existing channel message.
     * @returns A promise that resolves to the result object.
     */
    deleteChannelMessage(id: string): Promise<MutationResult<ChannelMessage>>;
    /**
     * Finds a channel by its ID.
     * @param id - The ID of the channel.
     * @param modelType - The model type.
     * @returns A promise that resolves to the channel object, or null if not found.
     */
    findById<T extends Model>(id: string, modelType: ModelType): Promise<T | null>;
    /**
     * Load a paginated list of channels.
     * @param filter - the filter.
     * @param match
     * @param skip - number of channels to skip for pagination.
     * @param limit - number of channels to return for pagination.
     * @returns A promise that resolves to a list of channels.
     */
    findChannels(filter: ChannelListFilter, match: Partial<Channel>, skip: number, limit: number): Promise<QueryResult<Channel>>;
    /**
     * Load a paginated list of invitations for a channel.
     * @param filter - the filter.
     * @param match
     * @param skip - number of invitations to skip for pagination.
     * @param limit - number of invitations to return for pagination.
     * @returns A promise that resolves to a list of channel invitations.
     */
    findChannelInvitations(filter: ChannelInvitationListFilter, match: Partial<ChannelInvitation>, skip: number, limit: number): Promise<QueryResult<ChannelInvitation>>;
    /**
     * Load a paginated list of messages for a channel.
     * @param filter - the filter.
     * @param match
     * @param skip - number of messages to skip for pagination.
     * @param limit - number of messages to return for pagination.
     * @returns A promise that resolves to a list of channel messages.
     */
    findChannelMessages(filter: ChannelMessageListFilter, match: Partial<ChannelMessage>, skip: number, limit: number): Promise<QueryResult<ChannelMessage>>;
    /**
     * Load a paginated list of participants for a channel.
     * @param filter - the filter.
     * @param match
     * @param skip - number of participants to skip for pagination.
     * @param limit - number of participants to return for pagination.
     * @returns A promise that resolves to a list of channel participants.
     */
    findChannelParticipants(filter: ChannelParticipantListFilter, match: Partial<ChannelParticipant>, skip: number, limit: number): Promise<QueryResult<ChannelParticipant>>;
    /**
     * Finds my User.
     * @returns A promise that resolves to my user object, or null if not found.
     */
    findMyUser(): Promise<MyUser | null>;
    /**
     * Finds a channel by its ID.
     * @param match
     * @param modelType - The model type.
     * @returns A promise that resolves to the channel object, or null if not found.
     */
    findOne<T extends Model>(match: Partial<T>, modelType: ModelType): Promise<T | null>;
    /**
     * Finds a channel by its ID.
     * @param object
     * @returns A promise that resolves to the channel object, or null if not found.
     */
    insertOne<T extends Model>(object: T): Promise<T | null>;
    SignInUser(ident: string, identType: UserIdentType, password: string): Promise<MutationResult<MyUser>>;
    signUpUser(userHandle: string, email?: string, password?: string): Promise<MutationResult<MyUser>>;
    /**
     * Updates an existing channel.
     * @returns A promise that resolves to the result object.
     */
    updateChannel(channel: Partial<Channel>): Promise<MutationResult<Channel>>;
    /**
     * Updates an existing channel message.
     * @returns A promise that resolves to the result object.
     */
    updateChannelInvitation(channelInvitation: Partial<ChannelInvitation>): Promise<MutationResult<ChannelInvitation>>;
    /**
     * Updates an existing channel message.
     * @returns A promise that resolves to the result object.
     */
    updateChannelMessage(channelMessage: Partial<ChannelMessage>): Promise<MutationResult<ChannelMessage>>;
    /**
     * Updates an existing channel participant.
     * @returns A promise that resolves to the result object.
     */
    updateChannelParticipant(channelParticipant: Partial<ChannelParticipant>): Promise<MutationResult<ChannelParticipant>>;
}
