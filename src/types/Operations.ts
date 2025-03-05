import { Channel } from './models/Channel.js';
import { ChannelInvitation } from './models/ChannelInvitation.js';
import { ChannelInvitationListFilter } from './models/ChannelInvitationListFilter.js';
import { ChannelListFilter } from './models/ChannelListFilter.js';
import { ChannelMessage } from './models/ChannelMessage.js';
import { ChannelMessageListFilter } from './models/ChannelMessageListFilter.js';
import { ChannelParticipant } from './models/ChannelParticipant.js';
import { ChannelParticipantListFilter } from './models/ChannelParticipantListFilter.js';
import { MutationResult } from './MutationResult.js';
import { QueryResult } from './QueryResult.js';
import { UserAuthResponse, UserIdentType } from '../fsdata/gql/graphql.js';
import { Model } from './Model.js';
import { ModelType } from './enums.js';

export interface Operations {
  findById: <T extends Model = Model>(id: string, modelType: ModelType) => Promise<QueryResult<T>>;

  findOne: <T extends Model = Model>(match: Partial<T>, modelType: ModelType) => Promise<QueryResult<T>>;

  channel: {
    createChannel: (attributes: Partial<Channel>) => Promise<MutationResult<Channel>>;
    deleteChannel: (id: string) => Promise<MutationResult<Channel>>;
    findChannels: (
      filter: ChannelListFilter,
      match: Partial<Channel>,
      skip: number,
      limit: number,
    ) => Promise<QueryResult<Channel>>;

    updateChannel: (changes: Partial<Channel>) => Promise<MutationResult<Channel>>;
  };

  channelInvitation: {
    createChannelInvitation: (attributes: Partial<ChannelInvitation>) => Promise<MutationResult<ChannelInvitation>>;

    deleteChannelInvitation: (id: string) => Promise<MutationResult<ChannelInvitation>>;

    findChannelInvitations: (
      filter: ChannelInvitationListFilter,
      match: Partial<ChannelInvitation>,
      skip: number,
      limit: number,
    ) => Promise<QueryResult<ChannelInvitation>>;

    updateChannelInvitation: (changes: Partial<ChannelInvitation>) => Promise<MutationResult<ChannelInvitation>>;
  };

  channelMessage: {
    createChannelMessage: (attributes: Partial<ChannelMessage>) => Promise<MutationResult<ChannelMessage>>;

    deleteChannelMessage: (id: string) => Promise<MutationResult<ChannelMessage>>;

    findChannelMessages: (
      filter: ChannelMessageListFilter,
      match: Partial<ChannelMessage>,
      skip: number,
      limit: number,
    ) => Promise<QueryResult<ChannelMessage>>;

    updateChannelMessage: (changes: Partial<ChannelMessage>) => Promise<MutationResult<ChannelMessage>>;
  };

  channelParticipant: {
    createChannelParticipant: (attributes: Partial<ChannelParticipant>) => Promise<MutationResult<ChannelParticipant>>;

    deleteChannelParticipant: (id: string) => Promise<MutationResult<ChannelParticipant>>;

    findChannelParticipants: (
      filter: ChannelParticipantListFilter,
      match: Partial<ChannelParticipant>,
      skip: number,
      limit: number,
    ) => Promise<QueryResult<ChannelParticipant>>;

    updateChannelParticipant: (changes: Partial<ChannelParticipant>) => Promise<MutationResult<ChannelParticipant>>;
  };

  myUser: {
    signInUser: (
      ident: string,
      identType: UserIdentType,
      password?: string,
    ) => Promise<MutationResult<UserAuthResponse>>;

    signUpUser: (userHandle: string, email?: string, password?: string) => Promise<MutationResult<UserAuthResponse>>;
  };
}
