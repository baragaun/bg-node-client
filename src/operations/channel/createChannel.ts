import db from '../../db/db.js';
import { ModelType, MutationType } from '../../enums.js';
import clientInfoStore from '../../helpers/clientInfoStore.js';
import libData from '../../helpers/libData.js';
import { Channel } from '../../models/Channel.js';
import { MutationResult } from '../../types/MutationResult.js';
import fsdata from '../../fsdata/fsdata.js';
import { ChannelInput } from '../../fsdata/gql/graphql.js';

const createChannel = async (
  props: Partial<Channel>,
): Promise<MutationResult<Channel>> => {
  if (!libData.isInitialized()) {
    throw new Error('not-initialized');
  }

  const clientInfo = clientInfoStore.get();
  if (!clientInfo.isSignedIn) {
    throw new Error('not-authorized');
  }

  try {
    const result = await fsdata.channel.createChannel(props as unknown as ChannelInput);

    if (!result.error || result.object) {
      await db.insert<Channel>(result.object, ModelType.Channel);
    }

    return result;
  } catch (error) {
    return {
      operation: MutationType.create,
      error: (error as Error).message,
    };
  }
};

export default createChannel;
