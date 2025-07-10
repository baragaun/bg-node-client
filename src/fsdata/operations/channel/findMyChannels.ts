import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { Channel } from '../../../models/Channel.js';
import { FindObjectsOptions } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  FindObjectsOptions as FindObjectsOptionsFromNetwork,
  InputMaybe,
  QueryFindMyChannelsArgs,
} from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    findMyChannels: Channel[];
  };
  errors?: { message: string }[];
};

const findMyChannels = async (
  options: FindObjectsOptions,
): Promise<QueryResult<Channel>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findMyChannels: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: QueryFindMyChannelsArgs = {
      options: (options as unknown as InputMaybe<FindObjectsOptionsFromNetwork>) || null,
    };

    const response: ResponseDataType = await client.query.findMyChannels({
      $: args,
      ...modelFields.channel,
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
        ? response.data.findMyChannels.map((channel) => new Channel(channel))
        : [],
    };
  } catch (error) {
    logger.error('fsdata.findMyChannels: error.',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findMyChannels;
