import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { Channel } from '../../../models/Channel.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { QueryFindChannelByIdArgs } from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    findChannelById: Channel | null;
  };
  errors?: { message: string }[];
};

const findChannelById = async (
  channelId: string,
): Promise<QueryResult<Channel>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findChannelById: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: QueryFindChannelByIdArgs = { id: channelId };

    const response: ResponseDataType = await client.query.findChannelById({
      $: args,
      ...modelFields.channel,
    });

    logger.debug('fsdata.findChannelById response:', { response });

    return {
      object: response.data.findChannelById
        ? new Channel(response.data.findChannelById)
        : null,
      error: Array.isArray(response.errors) && response.errors.length > 0
        ? response.errors.map(e => e.message).join(', ')
        : undefined,
    };
  } catch (error) {
    logger.error('fsdata.findChannelById: error', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findChannelById;
