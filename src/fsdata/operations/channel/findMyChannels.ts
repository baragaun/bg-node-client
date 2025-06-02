import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ChannelListItem } from '../../../types/ChannelListItem.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  FindObjectsOptions,
  InputMaybe,
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
  participantLimit: number | undefined,
  addLatestMessage: boolean | undefined,
  options: FindObjectsOptionsFromClient,
): Promise<QueryResult<ChannelListItem>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findMyChannels: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: QueryFindMyChannelsArgs = {
      participantLimit,
      addLatestMessage,
      options: (options as unknown as InputMaybe<FindObjectsOptions>) || null,
    };

    const response: ResponseDataType = await client.query.findMyChannels({
      $: args,
      ...modelFields.channelListItem,
    });

    logger.debug('fsdata.findMyChannels response:', { response });

    return {
      objects: response.data.findMyChannels,
    };
  } catch (error) {
    logger.error('fsdata.findMyChannels: error', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findMyChannels;
