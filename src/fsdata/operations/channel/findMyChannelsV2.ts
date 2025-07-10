import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ChannelListItem } from '../../../types/ChannelListItem.js';
import { FindObjectsOptions } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  FindObjectsOptions as FindObjectsOptionsFromNetwork,
  InputMaybe,
  QueryFindMyChannelsV2Args,
} from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    findMyChannelsV2: ChannelListItem[];
  };
  errors?: { message: string }[];
};

const findMyChannelsV2 = async (
  participantLimit: number | undefined,
  addLatestMessage: boolean | undefined,
  options: FindObjectsOptions,
): Promise<QueryResult<ChannelListItem>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findMyChannelsV2: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: QueryFindMyChannelsV2Args = {
      participantLimit,
      addLatestMessage,
      options: (options as unknown as InputMaybe<FindObjectsOptionsFromNetwork>) || null,
    };

    const response: ResponseDataType = await client.query.findMyChannelsV2({
      $: args,
      ...modelFields.channelListItem,
    });

    logger.debug('fsdata.findMyChannelsV2 received response.',
      { response: JSON.stringify(response) });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.findMyChannelsV2: errors received.',
        { errorCode: (response.errors['0'] as any)?.extensions?.code, errors: JSON.stringify(response.errors) });

      return { error: response.errors.map(error => error.message).join(', ') };
    }

    return {
      objects: response.data.findMyChannelsV2
        ? response.data.findMyChannelsV2.map((channel) => new ChannelListItem(channel))
        : [],
    };
  } catch (error) {
    logger.error('fsdata.findMyChannelsV2: error.',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findMyChannelsV2;
