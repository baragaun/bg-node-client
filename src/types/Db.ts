import { BgChannelsWebClientConfig } from './BgChannelsWebClientConfig.js';
import { Channel } from './models/Channel.js';
import { ChannelInvitation } from './models/ChannelInvitation.js';
import { ChannelMessage } from './models/ChannelMessage.js';
import { ChannelParticipant } from './models/ChannelParticipant.js';
import { ModelType } from './enums.js';
import { MutationResult } from './MutationResult.js';
import { QueryResult } from './QueryResult.js';
import { User } from './models/User.js';

export type ObjectType = Channel |
  ChannelInvitation |
  ChannelMessage |
  ChannelParticipant |
  User;

export interface Db {
  init: (config: BgChannelsWebClientConfig) => Promise<void>;
  insert: <T extends ObjectType = ObjectType>(obj: T) => Promise<MutationResult<T>>;
  delete: (id: string, modelType: ModelType) => Promise<MutationResult>;

  find: <T extends ObjectType = ObjectType>(
    match: Partial<T>,
    type: ModelType,
  ) => Promise<QueryResult<T>>

  findAll: <T extends ObjectType = ObjectType>(
    type: ModelType,
  ) => Promise<QueryResult<T>>;

  findById: <T extends ObjectType = ObjectType>(
    id: string,
    modelType: ModelType,
  ) => Promise<QueryResult<T>>;

  findOne: <T extends ObjectType = ObjectType>(
    match: Partial<T>,
    modelType: ModelType,
  ) => Promise<QueryResult<T>>

  replace: <T extends ObjectType>(obj: T) => Promise<MutationResult<T>>;

  update: <T extends ObjectType = ObjectType>(
    changes: Partial<T>,
    modelType: ModelType,
  ) => Promise<MutationResult<T>>;
}

