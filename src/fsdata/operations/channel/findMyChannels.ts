import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { Channel } from '../../../models/Channel.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  ChannelInput,
  ChannelListFilter,
  FindObjectsOptions,
  InputMaybe,
  QueryFindMyChannelsArgs,
} from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    findMyChannels: Channel[] | null;
  };
  errors?: { message: string }[];
};

const findMyChannels = async (
  filter: ChannelListFilter | null | undefined,
  match: Partial<Channel> | null | undefined,
  options: FindObjectsOptionsFromClient,
): Promise<QueryResult<Channel>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findMyChannels: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: QueryFindMyChannelsArgs = {
      filter: filter || null,
      match: (match as unknown as InputMaybe<ChannelInput>) || null,
      options: (options as unknown as InputMaybe<FindObjectsOptions>) || null,
    };

    const response: ResponseDataType = await client.query.findMyChannels({
      $: args,
      ...modelFields.channel,
    });

    logger.debug('fsdata.findMyChannels response:', { response });

    return {
      objects: response.data.findMyChannels
        ? response.data.findMyChannels.map((channel) => new Channel(channel))
        : null,
    };
  } catch (error) {
    logger.error('fsdata.findMyChannels: error', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findMyChannels;
