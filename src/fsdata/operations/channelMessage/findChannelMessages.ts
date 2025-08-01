import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ChannelMessage } from '../../../models/ChannelMessage.js';
import { ChannelMessageListFilter as ChannelMessageListFilterFromClient } from '../../../models/ChannelMessageListFilter.js';
import { FindObjectsOptions } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  ChannelMessageInput,
  ChannelMessageListFilter,
  FindObjectsOptions as FindObjectsOptionsFromNetwork,
  InputMaybe,
  QueryFindChannelMessagesArgs,
} from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    findChannelMessages: ChannelMessage[];
  };
  errors?: { message: string }[];
};

const findChannelMessages = async (
  filter: ChannelMessageListFilterFromClient | undefined,
  match: Partial<ChannelMessage> | undefined,
  options: FindObjectsOptions,
): Promise<QueryResult<ChannelMessage>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findChannelMessages: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: QueryFindChannelMessagesArgs = {
      filter: (filter || null) as unknown as ChannelMessageListFilter,
      match: match as unknown as ChannelMessageInput,
      options: options as unknown as InputMaybe<FindObjectsOptionsFromNetwork>,
    };

    const response: ResponseDataType = await client.query.findChannelMessages({
      $: args,
      ...modelFields.channelMessage,
    });

    logger.debug('fsdata.findChannelMessages received response.',
      { response: JSON.stringify(response) });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.findChannelMessages: errors received.',
        { errorCode: (response.errors['0'] as any)?.extensions?.code, errors: JSON.stringify(response.errors) });

      return { error: response.errors.map(error => error.message).join(', ') };
    }

    return {
      objects: response.data.findChannelMessages
        ? response.data.findChannelMessages.map((i) => new ChannelMessage(i))
        : [],
    };
  } catch (error) {
    logger.error('fsdata.findChannelMessages: error.',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findChannelMessages;
