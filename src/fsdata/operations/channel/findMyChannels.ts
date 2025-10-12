import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { Channel } from '../../../models/Channel.js';
import { ChannelListFilter } from '../../../models/ChannelListFilter.js';
import { ChannelListItem } from '../../../types/ChannelListItem.js';
import { ChannelMessageScope } from '../../../types/ChannelMessageScope.js';
import { FindObjectsOptions } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  ChannelInput,
  ChannelListFilter as ChannelListFilterFromNetwork,
  ChannelMessageScope as ChannelMessageScopeFromNetwork,
  FindObjectsOptions as FindObjectsOptionsFromNetwork,
  QueryFindMyChannelsArgs,
} from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    findMyChannels: ChannelListItem[];
  };
  errors?: { message: string }[];
};

const findMyChannels = async (
  filter?: ChannelListFilter,
  match?: Partial<Channel>,
  options?: FindObjectsOptions,
  scope?: ChannelMessageScope,
): Promise<QueryResult<ChannelListItem>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findMyChannels: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: QueryFindMyChannelsArgs = {
      filter: filter as unknown as ChannelListFilterFromNetwork || null,
      match: match as unknown as ChannelInput || null,
      options: (options as unknown as FindObjectsOptionsFromNetwork) || null,
      scope: scope as unknown as ChannelMessageScopeFromNetwork || null,
    };

    const response: ResponseDataType = await client.query.findMyChannels({
      $: args,
      ...modelFields.channelListItem,
    });

    logger.debug('fsdata.findMyChannels received response.',
      { response: JSON.stringify(response) });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.findMyChannels: errors received.',
        { errorCode: (response.errors['0'] as any)?.extensions?.code, errors: JSON.stringify(response.errors) });

      return { error: response.errors.map(error => error.message).join(', ') };
    }

    return {
      objects: response.data.findMyChannels
        ? response.data.findMyChannels.map((channel) => new ChannelListItem(channel))
        : [],
    };
  } catch (error) {
    logger.error('fsdata.findMyChannels: error.',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findMyChannels;
