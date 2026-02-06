import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { ChannelMessage } from '../../../models/ChannelMessage.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { MutationCreateChannelMessageArgs, ChannelMessageInput } from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    createChannelMessage: ChannelMessage;
  };
  error?: string;
};

const createChannelMessage = async (
  props: Partial<ChannelMessage>,
): Promise<QueryResult<ChannelMessage>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.createChannelMessage: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: MutationCreateChannelMessageArgs = {
      input: props as unknown as ChannelMessageInput,
    };

    const response: ResponseDataType = await client.mutation.createChannelMessage({
      $: args,
      ...modelFields.channelMessage,
    });

    logger.debug('fsdata.createChannelMessage received response.',
      { response: JSON.stringify(response) });

    if (response.error) {
      logger.error('fsdata.createChannelMessage: errors received.',
        { errorCode: (response.error as any)?.extensions?.code, errors: JSON.stringify(response.error) });

      return { error: response.error };
    }

    return {
      object: response.data.createChannelMessage
        ? new ChannelMessage(response.data.createChannelMessage)
        : null,
    };
  } catch (error) {
    logger.error('fsdata.createChannelMessage: error.', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default createChannelMessage;
