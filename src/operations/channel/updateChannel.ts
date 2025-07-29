import { ModelType } from '../../enums.js';
import { defaultQueryOptionsForMutations } from '../../helpers/defaults.js';
import { Channel } from '../../models/Channel.js';
import natsService from '../../nats/index.js';
import { QueryOptions } from '../../types/QueryOptions.js';
import { QueryResult } from '../../types/QueryResult.js';
import update from '../update.js';

const updateChannel = async (
  changes: Partial<Channel>,
  queryOptions: QueryOptions = defaultQueryOptionsForMutations,
): Promise<QueryResult<Channel>> => {
  const result = await update<Channel>(changes, ModelType.Channel, queryOptions);
  if (result.object) {
    await natsService.publishMessage(
      `channel.${result.object.id}.updated`,
      result.object,
    );
  }
  return result;
};

export default updateChannel;
