import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { Channel } from '../../../models/Channel.js';
import { ChannelListFilter as ChannelListFilterFromClient } from '../../../models/ChannelListFilter.js';
import { FindObjectsOptions } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  ChannelInput,
  ChannelListFilter,
  FindObjectsOptions as FindObjectsOptionsFromNetwork,
  InputMaybe,
  QueryFindChannelsArgs,
} from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    findChannels: Channel[];
  };
  errors?: { message: string }[];
};

const findChannels = async (
  filter: ChannelListFilterFromClient | null | undefined,
  match: Partial<Channel> | null | undefined,
  options: FindObjectsOptions,
): Promise<QueryResult<Channel>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findChannels: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: QueryFindChannelsArgs = {
      filter: (filter || null) as unknown as ChannelListFilter | null,
      match: match as unknown as InputMaybe<ChannelInput>,
      options: options as unknown as InputMaybe<FindObjectsOptionsFromNetwork>,
    };

    const response: ResponseDataType = await client.query.findChannels({
      $: args,
      ...modelFields.channel,
    });

    logger.debug('fsdata.findChannels received response.',
      { response: JSON.stringify(response) });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.findChannels: errors received.',
        { errorCode: (response.errors['0'] as any)?.extensions?.code, errors: JSON.stringify(response.errors) });

      return { error: response.errors.map(error => error.message).join(', ') };
    }

    return {
      objects: response.data.findChannels
        ? response.data.findChannels.map((channel) => new Channel(channel))
        : [],
    };
  } catch (error) {
    logger.error('fsdata.findChannels: error.',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findChannels;
