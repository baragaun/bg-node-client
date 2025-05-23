import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ChannelMessage } from '../../../models/ChannelMessage.js';
import { FindObjectsOptions as FindObjectsOptionsFromClient } from '../../../types/FindObjectsOptions.js';
import { QueryResult } from '../../../types/QueryResult.js';
import {
  ChannelInput,
  ChannelListFilter,
  FindObjectsOptions,
  InputMaybe,
  QueryFindChannelMessagesArgs,
} from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    findChannelMessages: ChannelMessage[] | null;
  };
  errors?: { message: string }[];
};

const findChannelMessages = async (
  filter: ChannelListFilter | undefined,
  match: ChannelInput | undefined,
  options: FindObjectsOptionsFromClient,
): Promise<QueryResult<ChannelMessage>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.findChannelMessages: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: QueryFindChannelMessagesArgs = {
      filter,
      match,
      options: options as unknown as InputMaybe<FindObjectsOptions>,
    };

    const response: ResponseDataType = await client.query.findChannelMessages({
      $: args,
      ...modelFields.channelMessage,
    });

    logger.debug('fsdata.findChannelMessages response:', { response });

    return {
      objects: response.data.findChannelMessages
        ? response.data.findChannelMessages.map((i) => new ChannelMessage(i))
        : null,
    };
  } catch (error) {
    logger.error('fsdata.findChannelMessages: error', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default findChannelMessages;
