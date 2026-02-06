import libData from '../../../helpers/libData.js';
import logger from '../../../helpers/logger.js';
import { Channel } from '../../../models/Channel.js';
import { QueryResult } from '../../../types/QueryResult.js';
import { MutationCreateChannelArgs, ChannelInput } from '../../gql/graphql.js';
import graffleClientStore from '../../helpers/graffleClientStore.js';
import helpers from '../../helpers/helpers.js';
import modelFields from '../../helpers/modelFields.js';

type ResponseDataType = {
  data: {
    createChannel: Channel;
  };
  error?: string;
};

const createChannel = async (
  props: Partial<Channel>,
): Promise<QueryResult<Channel>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.createChannel: unavailable');
      return { error: 'unavailable' };
    }

    delete props.maxSeq; // not allowed in input
    delete props.lastLiveSeq; // not allowed in input

    const client = graffleClientStore.get();
    const args: MutationCreateChannelArgs = {
      input: props as unknown as ChannelInput,
    };

    const response: ResponseDataType = await client.mutation.createChannel({
      $: args,
      ...modelFields.channel,
    });

    logger.debug('fsdata.createChannel received response.',
      { response: JSON.stringify(response) });

    if (response.error) {
      logger.error('fsdata.createChannel: errors received.',
        { errorCode: (response.error as any)?.extensions?.code, errors: JSON.stringify(response.error) });

      return { error: response.error };
    }

    return {
      object: response.data.createChannel
        ? new Channel(response.data.createChannel)
        : null,
    };
  } catch (error) {
    logger.error('fsdata.createChannel: error.',
      { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default createChannel;
