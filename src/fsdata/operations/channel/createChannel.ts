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
  errors?: { message: string }[];
};

const createChannel = async (
  props: Partial<Channel>,
): Promise<QueryResult<Channel>> => {
  try {
    if (!libData.isInitialized()) {
      logger.error('fsdata.createChannel: unavailable');
      return { error: 'unavailable' };
    }

    const client = graffleClientStore.get();
    const args: MutationCreateChannelArgs = {
      input: props as unknown as ChannelInput,
    };

    const response: ResponseDataType = await client.mutation.createChannel({
      $: args,
      ...modelFields.channel,
    });

    if (Array.isArray(response.errors) && response.errors.length > 0) {
      logger.error('fsdata.createChannel: errors received',
        { errorCode: (response.errors['0'] as any).extensions.code, errors: JSON.stringify(response.errors) });
      return { error: response.errors.map(error => error.message).join(', ') };
    }

    logger.debug('fsdata.createChannel response:', { response });

    return {
      object: response.data.createChannel
        ? new Channel(response.data.createChannel)
        : null,
    };
  } catch (error) {
    logger.error('fsdata.createChannel: failed', { error, headers: helpers.headers() });
    return { error: (error as Error).message };
  }
};

export default createChannel;
